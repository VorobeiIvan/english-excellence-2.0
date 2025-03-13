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

## Figma Markup Project

- [GoIT link](https://www.figma.com/design/MrdZUmIfeT1bKd8u5GWLRt/English-Excellence-2.0?node-id=0-1&t=WLyOAywO8J86pYBl-1)
- [My copy link](<https://www.figma.com/design/igHYuMj2fNI1anWXZzRjR3/English-Excellence-2.0-(Copy)?node-id=0-1&t=OmwC66Iw8GOOcCZk-1>)

## My Repository Link

[GitHub](https://github.com/VorobeiIvan/english-excellence-2.0)

## Favicon Creation

Для створення **favicon** для цього проєкту, я використав онлайн-інструмент [favicon.cc](https://www.favicon.cc/). Спочатку я завантажив PNG-версію з макету у Figma, а потім перетворив її на файл favicon.ico, який тепер використовується в проєкті.

````md
# Оптимізація зображень та SVG-спрайтів

## 1. Оптимізація SVG

Оптимізація SVG допомагає зменшити розмір файлів, видалити зайві атрибути та покращити продуктивність.

### Інструмент: [SVGOMG](https://optimize.svgomg.net/)

### Як оптимізувати SVG:

1. Перейдіть на [SVGOMG](https://optimize.svgomg.net/).
2. Завантажте SVG-файл.
3. Налаштуйте параметри оптимізації (залиште основні опції увімкненими для кращої оптимізації).
4. Завантажте оптимізований файл.

## 2. Конвертація зображень у WebP

Формат WebP забезпечує кращу компресію без значної втрати якості, що зменшує розмір файлів і прискорює завантаження сайту.

### Інструмент: [Squoosh](https://squoosh.app/)

### Як конвертувати у WebP:

1. Відкрийте [Squoosh](https://squoosh.app/).
2. Завантажте зображення у форматі JPEG, PNG або інший.
3. Виберіть формат **WebP** у налаштуваннях.
4. Відрегулюйте рівень якості (рекомендується **75-85%** для балансу якості та розміру).
5. Завантажте готове WebP-зображення.

## 3. Створення SVG-спрайтів

SVG-спрайт об'єднує кілька SVG-іконок в один файл, що зменшує кількість запитів до сервера.

### Інструмент: [IcoMoon](https://icomoon.io/app/#/select/image)

### Як створити SVG-спрайт:

1. Перейдіть на [IcoMoon](https://icomoon.io/app/#/select/image).
2. Натисніть **"Import Icons"** та завантажте SVG-іконки.
3. Виберіть усі іконки та натисніть **"Generate SVG & More"**.
4. Виберіть опцію **"SVG Sprite"** та завантажте спрайт.

## 4. Додаткові рекомендації

✅ Використовуйте **SVG** для простих графічних елементів (іконки, логотипи).  
✅ Використовуйте **WebP** для всіх інших зображень для зменшення навантаження на сторінку.  
✅ Оптимізуйте **SVG** перед створенням спрайтів для кращої продуктивності.  
✅ Використовуйте **lazy loading** для зображень, щоб пришвидшити завантаження сторінок.

---

Використання цих методів значно покращить продуктивність вашого веб-сайту! 🚀

## Робота з шрифтами

### 🎨 Використання FontScanner у Figma

Щоб знайти, які шрифти використовуються у Figma, можна скористатися плагіном **FontScanner**. Він дозволяє зібрати всі шрифти з поточного файлу та компонентів:

1. Відкрий макет у Figma.
2. Перейди в **Plugins** → **FontScanner**.
3. Запусти плагін, і він покаже всі шрифти, що використовуються в дизайні.
4. Використай цей список для визначення, які шрифти треба додати в проєкт.

---

### 🔹 Локальне завантаження та оптимізація через Transfonter

Якщо хочеш використовувати шрифти локально:

1. Завантаж **Manrope** з [Google Fonts](https://fonts.google.com/).
2. Перейди на [Transfonter](https://transfonter.org/).
3. Завантаж файли `.ttf`, обери формат `woff2` (цей формат є більш стиснутим і оптимізованим для веб-ресурсів) і натисни **Convert**.
4. Скачай оптимізовані файли й додай їх у проєкт, наприклад, у `src/assets/fonts/`.
5. Підключи у SCSS:

```scss
@font-face {
  font-family: 'Manrope';
  src: url('@/assets/fonts/Manrope-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url('@/assets/fonts/Manrope-SemiBold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'Manrope';
  src: url('@/assets/fonts/Manrope-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
}

body {
  font-family: 'Manrope', sans-serif;
}
```
````
