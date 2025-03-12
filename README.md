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

## 📦 Налаштування оптимізації зображень у Vite

У цьому проєкті ми використовуємо [`vite-plugin-image-optimizer`](https://www.npmjs.com/package/vite-plugin-image-optimizer) для автоматичної оптимізації зображень у форматах PNG, JPG, GIF, WebP, Avif тощо.

### 📥 Встановлення плагіна

```bash
npm install vite-plugin-image-optimizer --save-dev
```

### 🔧 Налаштування конфігурації

Ми винесли параметри оптимізації в окремий файл imageOptimizer.ts, щоб зробити код більш структурованим.

### ⚙️ Як це працює?

✅ Під час запуску білда (npm run build) плагін автоматично знаходить всі зображення в src/assets/img/ і оптимізує їх.
✅ Формати PNG, JPG, WebP, Avif стискаються із заданою якістю.
✅ Використовується кеш, що прискорює процес при повторному білді.
✅ Оригінальні файли в src/assets/img/ залишаються без змін – плагін працює лише у фінальному білді.

### 🚀 Запуск білда з оптимізацією

```bash
npm run build
```

Це дозволить отримати легші зображення, які швидше завантажуються та покращують продуктивність сайту.

## 📦 Налаштування спрайтів для SVG і оптимізація зображень за допомогою SVGO

У цьому проєкті ми використовуємо два плагіни для роботи з SVG:

- **vite-plugin-svg-sprite**— для автоматичного створення SVG спрайтів.
- **svgo** — для оптимізації SVG файлів перед створенням спрайту.

### 📥 Встановлення плагінів

```bash
npm install vite-plugin-svg-sprite svgo --save-dev
```

### 🔧 Налаштування конфігурації плагінів

Ми винесли параметри для оптимізації SVG файлів у окремий файл svgoOptions.ts, а також налаштування для vite-plugin-svg-sprite в svgSpritePluginOptions.ts для кращої організації коду.

📄 **Файл:** src/config/svgoOptions.ts

```ts
const svgoOptions = [
  { removeTitle: true }, // Видалити елементи <title>
  { removeDesc: true }, // Видалити елементи <desc>
  { removeDimensions: true }, // Видалити атрибути width та height
  { removeAttrs: { attrs: 'fill stroke' } }, // Видалити атрибути fill та stroke
  { inlineStyles: { onlyMatchedOnce: false } }, // Перетворити всі стилі на інлайн
  { cleanupIDs: true }, // Очищення ID
  { removeUselessDefs: true }, // Видалити непотрібні <defs>
  { convertShapeToPath: true }, // Перетворити форми на шляхи
  { addAttributesToSVGElement: { attributes: ['fill="currentColor"'] } }, // Додати атрибут fill="currentColor"
]

export default svgoOptions
```

📄 **Файл:** src/config/svgSpritePluginOptions.ts

```ts
import svgoOptions from './svgoOptions'

const svgSpritePluginOptions = {
  exportType: 'vue', // Експортувати як Vue компонент
  include: 'src/assets/icons/\*_/_.svg', // Всі SVG файли в папці `src/assets/icons/`
  symbolId: 'icon-[name]', // Назва іконки в спрайті
  svgo: {
    plugins: svgoOptions, // Використовуємо плагіни SVGO для оптимізації
  },
  spriteFileName: 'icons-sprite.svg', // Назва файлу спрайту
  inject: true, // Автоматичне інжектування спрайту в HTML (для vanilla)
}

export default svgSpritePluginOptions
```

📄 **Файл:** vite.config.ts

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ViteSvgSpritePlugin } from 'vite-plugin-svg-sprite' // Плагін для створення SVG спрайтів

import svgSpritePluginOptions from './src/config/svgSpritePluginOptions' // Налаштування для плагіна
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import imageOptimizerOptions from './src/config/imageOptimizer'

export default defineConfig({
  plugins: [
    vue(), // Плагін для Vue
    ViteImageOptimizer(imageOptimizerOptions), // Плагін для оптимізації зображень
    ViteSvgSpritePlugin(svgSpritePluginOptions), // Плагін для створення SVG спрайтів
  ],
})
```

### ⚙️ Як це працює ?

✅ Оптимізація SVG:

- Перед створенням спрайту всі SVG файли будуть оптимізовані за допомогою svgo, що дозволить зменшити їх розмір і прибрати непотрібні атрибути (наприклад, fill, stroke, title, desc тощо).
- Також будуть додані атрибути, наприклад, fill="currentColor", щоб іконки успадковували колір від батьківського елемента.

✅ Створення SVG спрайту:

- Використовуючи vite-plugin-svg-sprite, ми об'єднуємо всі SVG файли в один спрайт.
- Кожна іконка отримає ідентифікатор у форматі icon-[name], що полегшує її використання в додатку.
- Плагін автоматично генерує файл спрайту icons-sprite.svg, який може бути використаний на веб-сторінці.

✅ Автоматичне інжектування спрайту (для vanilla):

- Якщо ви використовуєте vanilla (без фреймворку), плагін автоматично інжектує спрайт у HTML.

### 🚀 Запуск білда з оптимізацією SVG

```bash
npm run build
```

Після виконання команди npm run build всі SVG файли будуть оптимізовані і додані до спрайту. Ви отримаєте легші SVG іконки, які можуть бути використані у вашому проекті.

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
