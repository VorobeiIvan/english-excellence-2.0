import svgoOptions from './svgoOptions'

const svgSpritePluginOptions = {
  exportType: 'vue', // або 'react' або 'vanilla'
  include: 'src/assets/icons/**/*.svg', // Всі SVG файли в папці icons
  symbolId: 'icon-[name]', // Назва іконки в спрайті
  svgo: {
    plugins: svgoOptions,
  },
  spriteFileName: 'icons-sprite.svg', // Назва файлу спрайту
  inject: true, // Включити автоматичне інжектування спрайту в HTML (для vanilla)
}

export default svgSpritePluginOptions
