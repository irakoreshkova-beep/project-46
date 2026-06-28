const dayPlans = [
  { short: "пн", type: "strength", title: "Тренировка A", detail: "Ноги · ягодицы · спина", time: "45 мин" },
  { short: "вт", type: "walk", title: "Прогулка в хорошем темпе", detail: "Свежий воздух · ровный темп", time: "40 мин" },
  { short: "ср", type: "strength", title: "Тренировка B", detail: "Ноги · плечи · руки", time: "45 мин" },
  { short: "чт", type: "walk", title: "Прогулка в хорошем темпе", detail: "Свежий воздух · ровный темп", time: "45 мин" },
  { short: "пт", type: "strength", title: "Тренировка C", detail: "Всё тело", time: "50 мин" },
  { short: "сб", type: "rest", title: "Свободный день", detail: "Без обязательной активности", time: "—" },
  { short: "вс", type: "walk", title: "Длинная прогулка", detail: "Парк · комфортный темп", time: "75 мин" },
];

const workouts = {
  A: [
    exercise("Болгарский сплит-присед", "3 × 8–10 на ногу", "Ноги и ягодицы", "Поставь заднюю ногу на опору и опускайся вертикально, сохраняя вес в передней стопе.", "Не заваливай колено внутрь и не отталкивайся задней ногой.", "Выпады назад или сплит-присед без опоры", "Если было легко: возьми гантели тяжелее или добавь 1 повтор на каждую ногу."),
    exercise("Румынская тяга с гантелями", "4 × 8–10", "Ягодицы и задняя поверхность бедра", "Отведи таз назад, держи гантели близко к ногам и сохраняй длинную спину.", "Не округляй спину и не приседай вместо наклона.", "Тяга с резинкой или good morning с резинкой", "Если было легко: добавь 1–2 кг на гантель или сделай медленнее опускание."),
    exercise("Тяга сидя узким хватом", "3 × 10–12", "Спина", "Начни с опущенных плеч и тяни рукоять к нижним рёбрам.", "Не раскачивай корпус и не зажимай шею.", "Тяга резинки к поясу", "Если было легко: увеличь вес на 1 деление."),
    exercise("Хип-траст", "4 × 10–12", "Ягодицы", "Упрись лопатками в лавку, подними таз и задержись сверху на секунду.", "Не переразгибай поясницу в верхней точке.", "Ягодичный мост с гантелью", "Если было легко: добавь вес на таз или паузу 2 секунды сверху."),
    exercise("Планка с касанием плеч", "3 × 20 касаний", "Кор", "Держи корпус неподвижным и поочерёдно касайся плеч рукой.", "Не раскачивай таз из стороны в сторону.", "Обычная планка или планка с колен", "Если было легко: делай медленнее или добавь 10 секунд."),
  ],
  B: [
    exercise("Жим ногами узкой постановкой", "3 × 10–12", "Ноги и ягодицы", "Поставь стопы чуть уже таза и толкай платформу всей стопой.", "Не выпрямляй колени в замок.", "Гоблет-присед", "Если было легко: добавь 5 кг или 1–2 повтора."),
    exercise("Шаги на платформу", "3 × 8–10 на ногу", "Ягодицы и баланс", "Встань всей стопой на платформу и поднимайся за счёт передней ноги.", "Не отталкивайся сильно нижней ногой.", "Шаги на устойчивую ступень дома", "Если было легко: возьми гантели или подними платформу выше."),
    exercise("Жим гантелей сидя", "3 × 8–10", "Плечи и руки", "Сядь устойчиво, выжимай гантели вверх без прогиба в пояснице.", "Не поднимай плечи к ушам.", "Жим резинки вверх", "Если было легко: возьми гантели тяжелее на 1 кг."),
    exercise("Тяга гантели одной рукой", "3 × 10 на сторону", "Спина и руки", "Опирайся на лавку и тяни локоть к тазу.", "Не разворачивай корпус вверх.", "Тяга резинки одной рукой", "Если было легко: добавь вес или паузу в верхней точке."),
    exercise("Dead Bug с паузой", "3 × 10 на сторону", "Кор", "Прижми поясницу и задерживай вытянутую позицию на секунду.", "Не отрывай поясницу от пола.", "Поочерёдное опускание пяток", "Если было легко: выпрямляй ногу ниже к полу."),
  ],
  C: [
    exercise("Присед с паузой", "3 × 10–12", "Ноги и ягодицы", "Сядь вниз, задержись на секунду и встань без рывка.", "Не расслабляй корпус в нижней точке.", "Присед к стулу с паузой", "Если было легко: возьми гантель тяжелее или держи паузу 2 секунды."),
    exercise("Ягодичный мост с резинкой и паузой", "4 × 12", "Ягодицы и бёдра", "Надень резинку выше колен, подними таз и задержись сверху на 2 секунды.", "Не прогибай поясницу и не своди колени внутрь.", "Ягодичный мост с гантелью", "Если было легко: возьми более плотную резинку или добавь гантель на таз."),
    exercise("Тяга верхнего блока обратным хватом", "3 × 10–12", "Спина", "Тяни рукоять к верхней части груди и держи локти ближе к корпусу.", "Не тяни шеей и не откидывайся назад.", "Тяга резинки сверху", "Если было легко: увеличь вес на 1 деление."),
    exercise("Отжимания ниже опоры", "3 × 8–10", "Грудь и руки", "Выбери опору чуть ниже, чем раньше, и держи тело прямым.", "Не проваливай поясницу.", "Отжимания от высокой опоры", "Если было легко: опусти опору ниже или добавь 1–2 повтора."),
    exercise("Боковая планка с подъёмом таза", "3 × 8 на сторону", "Кор", "Из боковой планки плавно опускай и поднимай таз.", "Не заваливай плечо вперёд.", "Боковая планка статично", "Если было легко: добавь 2 повтора на сторону."),
  ],
};

function exercise(name, sets, muscles, technique, mistake, alternatives, progression) {
  return { name, sets, muscles, technique, mistake, alternatives, progression };
}

const state = {
  mode: localStorage.getItem("p46-mode") || "gym",
  effort: JSON.parse(localStorage.getItem("p46-effort") || "{}"),
  habits: JSON.parse(localStorage.getItem("p46-habits") || "{}"),
  weights: JSON.parse(localStorage.getItem("p46-weights") || "null") || seedWeights(),
  checkins: JSON.parse(localStorage.getItem("p46-checkins") || "{}"),
};

const now = new Date();
const currentDay = (now.getDay() + 6) % 7;
const todayPlan = dayPlans[currentDay];
const nextWorkoutKey = currentDay <= 0 ? "A" : currentDay <= 2 ? "B" : "C";
let activeWorkoutKey = todayPlan.type === "strength" ? todayPlan.title.slice(-1) : nextWorkoutKey;

function persistState() {
  localStorage.setItem("p46-mode", state.mode);
  localStorage.setItem("p46-effort", JSON.stringify(state.effort));
  localStorage.setItem("p46-habits", JSON.stringify(state.habits));
  localStorage.setItem("p46-weights", JSON.stringify(state.weights));
  localStorage.setItem("p46-checkins", JSON.stringify(state.checkins));
}

function seedWeights() {
  const values = [50.2, 50.0, 49.9, 50.1, 49.7, 49.8, 49.5, 49.6, 49.4, 49.3];
  return values.map((weight, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (values.length - index));
    return { date: date.toISOString().slice(0, 10), weight };
  });
}

function formatDate(date, options) {
  return new Intl.DateTimeFormat("ru-RU", options).format(date).replace(/^./, (letter) => letter.toUpperCase());
}

function renderToday() {
  document.querySelector("#today-date").textContent = formatDate(now, { weekday: "long", day: "numeric", month: "long" });
  document.querySelector("#hero-title").textContent = todayPlan.title;
  document.querySelector("#hero-description").textContent = todayPlan.detail;
  document.querySelector("#hero-orb-label").textContent = todayPlan.time.replace(/\D/g, "") || "0";
  document.querySelector("#primary-action-label").textContent = todayPlan.type === "strength" ? "Начать тренировку" : todayPlan.type === "rest" ? "Открыть план недели" : "Начать прогулку";
  const latest = state.weights.at(-1);
  document.querySelector("#today-weight").textContent = latest?.date === now.toISOString().slice(0, 10) ? `${latest.weight.toFixed(1)} кг` : "добавить";

  const habits = [
    { id: "steps", icon: "8k", title: "8 000 шагов", detail: "Можно собрать за день частями" },
    { id: "protein", icon: "P", title: "Белок в основных приёмах пищи", detail: "Без подсчёта граммов" },
    { id: "sleep", icon: "00", title: "Лечь до 00:30", detail: "Начать замедляться в 23:45" },
  ];
  document.querySelector("#habit-list").innerHTML = habits.map((habit) => `
    <label class="habit-item">
      <span class="habit-icon">${habit.icon}</span>
      <span><strong>${habit.title}</strong><small>${habit.detail}</small></span>
      <input class="habit-check" data-habit="${habit.id}" type="checkbox" ${state.habits[habit.id] ? "checked" : ""} />
    </label>`).join("");
  updateHabitCount();
}

function renderWeek() {
  document.querySelector("#week-strip").innerHTML = dayPlans.map((plan, index) => `
    <div class="week-day ${plan.type} ${index === currentDay ? "today" : ""}">
      <strong>${plan.short}</strong><i></i><small>${index === currentDay ? "сегодня" : plan.type === "strength" ? plan.title.slice(-1) : "•"}</small>
    </div>`).join("");

  const monday = new Date(now);
  monday.setDate(now.getDate() - currentDay);
  document.querySelector("#week-plan").innerHTML = dayPlans.map((plan, index) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + index);
    return `<article class="plan-row ${index === currentDay ? "today" : ""}">
      <div class="plan-date"><strong>${date.getDate()}</strong><small>${plan.short}</small></div>
      <div><h3>${plan.title}</h3><p>${plan.detail} · ${plan.time}</p></div>
      <span class="plan-tag ${plan.type}">${plan.type === "strength" ? "силовая" : plan.type === "walk" ? "активность" : "отдых"}</span>
    </article>`;
  }).join("");
}

function homeName(name) {
  const replacements = { "Тяга верхнего блока": "Тяга резинки сверху", "Горизонтальная тяга": "Тяга гантели в наклоне", "Тяга блока": "Тяга резинки", "Жим ногами": "Гоблет-присед" };
  return replacements[name] || name;
}

function exerciseImage(name, large = false) {
  const images = {
    "Жим ногами": ["a", 0],
    "Жим ногами узкой постановкой": ["a", 0],
    "Румынская тяга": ["a", 1],
    "Румынская тяга с гантелями": ["a", 1],
    "Тяга верхнего блока": ["a", 2],
    "Тяга верхнего блока обратным хватом": ["a", 2],
    "Ягодичный мост": ["a", 3],
    "Хип-траст": ["a", 3],
    "Планка": ["a", 4],
    "Планка с касанием плеч": ["a", 4],
    "Гоблет-присед": ["b", 0],
    "Болгарский сплит-присед": ["b", 1],
    "Выпады назад": ["b", 1],
    "Шаги на платформу": ["b", 1],
    "Жим гантелей вверх": ["b", 2],
    "Жим гантелей сидя": ["b", 2],
    "Горизонтальная тяга": ["b", 3],
    "Тяга сидя узким хватом": ["b", 3],
    "Тяга гантели одной рукой": ["b", 3],
    "Dead Bug": ["b", 4],
    "Dead Bug с паузой": ["b", 4],
    "Присед": ["c", 0],
    "Присед с паузой": ["c", 0],
    "Ягодичный мост с резинкой и паузой": ["a", 3],
    "Тяга блока": ["b", 3],
    "Отжимания от высокой опоры": ["c", 3],
    "Отжимания ниже опоры": ["c", 3],
    "Боковая планка": ["c", 4],
    "Боковая планка с подъёмом таза": ["c", 4],
    "Тяга резинки сверху": ["a", 2],
    "Тяга гантели в наклоне": ["a", 1],
    "Тяга резинки": ["c", 2],
  };
  const [sheet, row] = images[name] || ["c", 0];
  return `<div class="exercise-photo ${large ? "large" : ""}" style="--sheet: url('./assets/exercises/workout-${sheet}.png'); --row: ${row}"></div>`;
}

function renderWorkout() {
  const list = workouts[activeWorkoutKey];
  document.querySelector("#workout-title").textContent = `Тренировка ${activeWorkoutKey}`;
  document.querySelector("#workout-subtitle").textContent = `${dayPlans.find((item) => item.title === `Тренировка ${activeWorkoutKey}`)?.detail || "Всё тело"} · около 45 минут`;
  document.querySelectorAll("[data-mode]").forEach((button) => button.classList.toggle("active", button.dataset.mode === state.mode));
  document.querySelector("#exercise-list").innerHTML = list.map((item, index) => {
    const key = `${activeWorkoutKey}-${index}`;
    const title = state.mode === "home" ? homeName(item.name) : item.name;
    return `<article class="exercise-card">
      <div class="exercise-thumb">${exerciseImage(title)}</div>
      <div><h3>${title}</h3><p>${item.sets} · ${item.muscles}</p></div>
      <button class="exercise-open" data-exercise="${index}" aria-label="Открыть ${title}">→</button>
      <p class="load-hint">${item.progression}</p>
      <div class="effort-row" data-effort-row="${key}">
        ${["Легко", "Нормально", "Тяжело"].map((effort) => `<button class="${state.effort[key] === effort ? "active" : ""}" data-effort="${effort}" data-key="${key}">${effort}</button>`).join("")}
      </div>
    </article>`;
  }).join("");
  updateWorkoutProgress();
}

function updateWorkoutProgress() {
  const complete = Object.keys(state.effort).filter((key) => key.startsWith(`${activeWorkoutKey}-`)).length;
  document.querySelector("#workout-complete-count").textContent = complete;
  document.querySelector("#workout-progress-bar").style.width = `${complete / 5 * 100}%`;
}

function renderProgress() {
  const recent = state.weights.slice(-10);
  const average = state.weights.slice(-7).reduce((sum, item) => sum + item.weight, 0) / Math.min(state.weights.length, 7);
  const change = recent.at(-1).weight - recent[0].weight;
  document.querySelector("#average-weight").textContent = `${average.toFixed(1)} кг`;
  document.querySelector("#weight-change").textContent = `${change > 0 ? "+" : ""}${change.toFixed(1)} кг`;
  document.querySelector("#weight-history").innerHTML = recent.slice(-5).reverse().map((item) => `
    <div class="weight-row"><span>${formatDate(new Date(`${item.date}T12:00:00`), { day: "numeric", month: "long" })}</span><strong>${item.weight.toFixed(1)} кг</strong></div>`).join("");

  const svg = document.querySelector("#weight-chart");
  const min = Math.min(...recent.map((item) => item.weight)) - .25;
  const max = Math.max(...recent.map((item) => item.weight)) + .25;
  const points = recent.map((item, index) => {
    const x = 12 + index * (316 / Math.max(1, recent.length - 1));
    const y = 145 - ((item.weight - min) / (max - min)) * 115;
    return [x, y];
  });
  const line = points.map((point) => point.join(",")).join(" ");
  svg.innerHTML = `
    <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd2e4" stop-opacity=".46"/><stop offset="1" stop-color="#ffd2e4" stop-opacity="0"/></linearGradient></defs>
    <path d="M ${points[0].join(" ")} ${points.slice(1).map((p) => `L ${p.join(" ")}`).join(" ")} L ${points.at(-1)[0]} 158 L ${points[0][0]} 158 Z" fill="url(#area)"/>
    <polyline points="${line}" fill="none" stroke="#ffd2e4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    ${points.map((point, index) => `<circle cx="${point[0]}" cy="${point[1]}" r="${index === points.length - 1 ? 5 : 2.5}" fill="${index === points.length - 1 ? "#fffdf8" : "#ffd2e4"}"/>`).join("")}`;
}

function showScreen(name) {
  document.querySelectorAll(".screen").forEach((screen) => screen.classList.toggle("active", screen.dataset.screen === name));
  document.querySelectorAll("[data-screen-link]").forEach((button) => button.classList.toggle("active", button.dataset.screenLink === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateHabitCount() {
  document.querySelector("#habit-count").textContent = `${Object.values(state.habits).filter(Boolean).length}/3`;
}

function toast(message) {
  const element = document.querySelector("#toast");
  element.textContent = message;
  element.classList.add("show");
  setTimeout(() => element.classList.remove("show"), 2200);
}

document.addEventListener("click", (event) => {
  const screenLink = event.target.closest("[data-screen-link]");
  if (screenLink) showScreen(screenLink.dataset.screenLink);

  const action = event.target.closest("[data-action]")?.dataset.action;
  if (action === "open-weight") document.querySelector("#weight-dialog").showModal();
  if (action === "close-exercise") document.querySelector("#exercise-dialog").close();
  if (action === "finish-workout") document.querySelector("#checkin-dialog").showModal();
  if (action === "save-weight") {
    event.preventDefault();
    const input = document.querySelector("#weight-input");
    if (!input.value) return;
    const today = now.toISOString().slice(0, 10);
    state.weights = state.weights.filter((item) => item.date !== today);
    state.weights.push({ date: today, weight: Number(input.value) });
    persistState();
    document.querySelector("#weight-dialog").close();
    renderToday();
    renderProgress();
    toast("Вес сохранён без оценки");
  }
  if (action === "save-checkin") {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(document.querySelector("#checkin-form")).entries());
    state.checkins[now.toISOString().slice(0, 10)] = {
      workout: Boolean(values.workout),
      steps: Boolean(values.steps),
      sleep: Boolean(values.sleep),
    };
    persistState();
    document.querySelector("#checkin-dialog").close();
    toast("День отмечен. Этого достаточно.");
  }

  const mode = event.target.closest("[data-mode]")?.dataset.mode;
  if (mode) {
    state.mode = mode;
    persistState();
    renderWorkout();
  }

  const effortButton = event.target.closest("[data-effort]");
  if (effortButton) {
    state.effort[effortButton.dataset.key] = effortButton.dataset.effort;
    persistState();
    renderWorkout();
  }

  const exerciseButton = event.target.closest("[data-exercise]");
  if (exerciseButton) {
    const item = workouts[activeWorkoutKey][Number(exerciseButton.dataset.exercise)];
    const displayName = state.mode === "home" ? homeName(item.name) : item.name;
    document.querySelector("#exercise-visual").innerHTML = exerciseImage(displayName, true);
    document.querySelector("#exercise-muscles").textContent = item.muscles;
    document.querySelector("#exercise-detail-title").textContent = displayName;
    document.querySelector("#exercise-technique").textContent = item.technique;
    document.querySelector("#exercise-sets").textContent = item.sets;
    document.querySelector("#exercise-mistake").textContent = item.mistake;
    document.querySelector("#exercise-alternatives").textContent = `Замены: ${item.alternatives}.`;
    document.querySelector("#exercise-progression").textContent = item.progression;
    document.querySelector("#exercise-video").href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${displayName} правильная техника`)}`;
    document.querySelector("#exercise-dialog").showModal();
  }
});

document.addEventListener("change", (event) => {
  if (event.target.matches("[data-habit]")) {
    state.habits[event.target.dataset.habit] = event.target.checked;
    persistState();
    updateHabitCount();
  }
});

document.querySelector("#primary-action").addEventListener("click", () => {
  if (todayPlan.type === "strength") {
    activeWorkoutKey = todayPlan.title.slice(-1);
    renderWorkout();
    showScreen("workout");
  } else if (todayPlan.type === "rest") {
    showScreen("week");
  } else {
    toast("Таймер прогулки запущен: 45 минут");
  }
});

renderToday();
renderWeek();
renderWorkout();
renderProgress();

if ("serviceWorker" in navigator) navigator.serviceWorker.register("./sw.js");
