type ExportType = 'vue' | 'react' | 'vanilla'

const svgSpritePluginOptions = {
  exportType: 'vue', // або 'react' або 'vanilla'
  include: 'src/assets/icons/**/*.svg', // Всі SVG файли в папці icons
  symbolId: 'icon-[name]', // Назва іконки в спрайті
  svgo: {
    plugins: [{ removeTitle: true }, { removeDesc: true }, { removeDimensions: true }],
  },
  spriteFileName: 'icons-sprite.svg', // Назва файлу спрайту
  inject: true, // Включити автоматичне інжектування спрайту в HTML (для vanilla)
}

export default svgSpritePluginOptions
