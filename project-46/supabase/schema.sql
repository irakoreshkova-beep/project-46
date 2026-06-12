create table if not exists public.project46_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  weights jsonb not null default '[]'::jsonb,
  habits jsonb not null default '{}'::jsonb,
  effort jsonb not null default '{}'::jsonb,
  checkins jsonb not null default '{}'::jsonb,
  mode text not null default 'gym' check (mode in ('gym', 'home')),
  updated_at timestamptz not null default now()
);

alter table public.project46_state add column if not exists checkins jsonb not null default '{}'::jsonb;
alter table public.project46_state enable row level security;

revoke all on table public.project46_state from anon;
grant select, insert, update on table public.project46_state to authenticated;

drop policy if exists "Users can read own PROJECT 46 state" on public.project46_state;
create policy "Users can read own PROJECT 46 state"
on public.project46_state for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert own PROJECT 46 state" on public.project46_state;
create policy "Users can insert own PROJECT 46 state"
on public.project46_state for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update own PROJECT 46 state" on public.project46_state;
create policy "Users can update own PROJECT 46 state"
on public.project46_state for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
