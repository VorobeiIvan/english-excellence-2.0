#

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## [Conventional Commits](https://www.conventionalcommits.org/uk/v1.0.0/#summary)

### Основні типи Conventional Commits

| Тег         | Коли використовувати?                                 |
| ----------- | ----------------------------------------------------- |
| `init:`     | Початковий коміт проєкту                              |
| `feat:`     | Додавання нової функціональності                      |
| `fix:`      | Виправлення багів                                     |
| `chore:`    | Налаштування, оновлення залежностей, конфіги          |
| `docs:`     | Зміни у документації                                  |
| `refactor:` | Покращення коду без зміни логіки                      |
| `style:`    | Форматування коду (відступи, лапки, без зміни логіки) |

### Приклад практичного використання

1. **Початковий коміт проєкту:**

   ```bash
   git commit -m "init: initialize Vue 3 project with Vite"
   ```

2. **Додавання нової функціональності:**

   ```bash
   git commit -m "feat: add user authentication feature"
   ```

3. **Виправлення багу:**

   ```bash
   git commit -m "fix: resolve issue with form validation"
   ```

4. **Налаштування, оновлення залежностей або конфіги:**

   ```bash
   git commit -m "chore: update package dependencies"
   ```

5. **Зміни в документації:**

   ```bash
   git commit -m "docs: update README with setup instructions"
   ```

6. **Покращення коду без зміни логіки:**

   ```bash
   git commit -m "refactor: optimize the login validation function"
   ```

7. **Форматування коду (відступи, лапки, без зміни логіки):**

   ```bash
   git commit -m "style: format code to follow eslint rules"
   ```
