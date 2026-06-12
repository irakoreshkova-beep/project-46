# Supabase Sync Setup

Эта настройка нужна один раз перед публикацией приложения.

## 1. Создать проект

1. Открыть [Supabase](https://supabase.com/dashboard).
2. Создать новый проект.
3. Открыть `SQL Editor`.
4. Выполнить весь файл [`supabase/schema.sql`](./supabase/schema.sql).

Схема вручную выдаёт доступ только вошедшим пользователям и не открывает таблицу анонимным посетителям.

## 2. Включить вход по email

В Supabase открыть:

`Authentication` → `Providers` → `Email`

Включить Email provider и оставить вход по magic link.

В `Authentication` → `URL Configuration` добавить:

- Site URL: адрес GitHub Pages, например `https://USERNAME.github.io/project-46/`
- Redirect URL: `https://USERNAME.github.io/project-46/**`
- Redirect URL: `http://127.0.0.1:4174/**`
- Redirect URL: `http://localhost:4174/**`

## 3. Подключить приложение

В Supabase открыть `Project Settings` → `API` и скопировать:

- Project URL
- `anon` / publishable key

Вставить их в [`config.js`](./config.js):

```js
export const SUPABASE_URL = "https://PROJECT.supabase.co";
export const SUPABASE_ANON_KEY = "YOUR_ANON_KEY";
```

`anon` key разрешено публиковать в браузерном приложении. Безопасность обеспечивает RLS из `schema.sql`.

Никогда не добавлять `service_role` key в этот проект.

## 4. Первый вход

1. Запустить локальное приложение на компьютере через `http://127.0.0.1:4174/`.
2. Нажать `Настроить` в верхней части экрана.
3. Ввести email и открыть ссылку из письма.
4. Текущие локальные данные автоматически загрузятся в Supabase.
5. Опубликовать приложение на GitHub Pages.
6. На телефоне открыть опубликованное приложение и войти той же почтой.

После этого изменения синхронизируются автоматически. При отсутствии интернета они сохраняются локально и отправляются позже.
