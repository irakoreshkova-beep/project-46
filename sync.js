import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./config.js?v=11";

const configured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
let client = null;
let user = null;
let saveTimer = null;
let changeHandler = () => {};

function mergeWeights(local, remote) {
  const byDate = new Map();
  [...remote, ...local].forEach((item) => byDate.set(item.date, item));
  return [...byDate.values()].sort((a, b) => a.date.localeCompare(b.date));
}

function mergeState(local, remote) {
  if (!remote) return local;
  return {
    weights: mergeWeights(local.weights, remote.weights || []),
    habits: { ...(remote.habits || {}), ...local.habits },
    effort: { ...(remote.effort || {}), ...local.effort },
    checkins: { ...(remote.checkins || {}), ...local.checkins },
    mode: local.mode || remote.mode || "gym",
  };
}

async function getClient() {
  if (!configured) return null;
  if (!client) {
    const { createClient } = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm");
    client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      auth: { persistSession: true, detectSessionInUrl: true },
    });
  }
  return client;
}

async function fetchRemoteState() {
  const supabase = await getClient();
  if (!supabase || !user) return null;
  const { data, error } = await supabase.from("project46_state").select("*").eq("user_id", user.id).maybeSingle();
  if (error) throw error;
  return data;
}

async function pushState(state) {
  const supabase = await getClient();
  if (!supabase || !user) return;
  const { error } = await supabase.from("project46_state").upsert({
    user_id: user.id,
    weights: state.weights,
    habits: state.habits,
    effort: state.effort,
    checkins: state.checkins,
    mode: state.mode,
    updated_at: new Date().toISOString(),
  });
  if (error) throw error;
}

export function isSyncConfigured() {
  return configured;
}

export async function initSync(localState, onChange) {
  changeHandler = onChange;
  if (!configured) return { status: "not-configured" };

  const supabase = await getClient();
  const { data } = await supabase.auth.getSession();
  user = data.session?.user || null;

  supabase.auth.onAuthStateChange(async (_event, session) => {
    user = session?.user || null;
    if (!user) {
      changeHandler({ status: "signed-out" });
      return;
    }
    try {
      const merged = mergeState(localState, await fetchRemoteState());
      await pushState(merged);
      changeHandler({ status: "synced", user, state: merged });
    } catch (error) {
      changeHandler({ status: "error", error });
    }
  });

  if (!user) return { status: "signed-out" };
  try {
    const merged = mergeState(localState, await fetchRemoteState());
    await pushState(merged);
    return { status: "synced", user, state: merged };
  } catch (error) {
    return { status: "error", error };
  }
}

export async function sendMagicLink(email) {
  const supabase = await getClient();
  if (!supabase) throw new Error("Supabase пока не настроен.");
  const redirectTo = window.location.href.split("#")[0].split("?")[0];
  const { error } = await supabase.auth.signInWithOtp({ email, options: { emailRedirectTo: redirectTo } });
  if (error) throw error;
}

export async function signOut() {
  const supabase = await getClient();
  if (supabase) await supabase.auth.signOut();
}

export function scheduleSync(state) {
  if (!configured || !user) return;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(async () => {
    try {
      const merged = mergeState(state, await fetchRemoteState());
      Object.assign(state, merged);
      await pushState(merged);
      changeHandler({ status: "synced", user, state: merged });
    } catch (error) {
      changeHandler({ status: "error", error });
    }
  }, 500);
}
