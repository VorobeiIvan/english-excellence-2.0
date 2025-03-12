import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Імпортуємо конфігурацію для оптимізації зображень
import imageOptimizerOptions from './config/imageOptimizerOptions'

export default defineConfig({
  plugins: [
    vue(),
    // Використовуємо плагін для оптимізації зображень з конфігурацією
    ViteImageOptimizer(imageOptimizerOptions),
    createSvgSpritePlugin({
      symbolId: 'icon-[dir]-[name]',
      exportType: 'vue',
      svgo: {
        multipass: false,
        datauri: 'base64',
        js2svg: {
          indent: 4,
          pretty: false,
        },
        plugins: [
          'preset-default',
          'prefixIds',
          {
            name: 'prefixIds',
            params: {
              prefix: 'uwu', // додавання префікса до ID елементів у SVG
            },
          },
        ],
      },
      include: 'src/assets/icons/*.svg',
    }),
  ],
})
