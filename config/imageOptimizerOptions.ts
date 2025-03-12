const imageOptimizerOptions = {
  test: /\.(png|jpe?g|gif|tiff|webp|avif)$/i, // Визначаємо типи файлів для оптимізації
  include: ['src/assets/img/**/*.{png,jpg,jpeg,gif,tiff,webp,avif}'], // Папка, де знаходяться зображення для оптимізації
  includePublic: false, // Не обробляємо зображення в папці public
  logStats: true, // Виводимо статистику про оптимізацію
  png: { quality: 80 }, // Параметри оптимізації для PNG
  jpeg: { quality: 85 }, // Параметри оптимізації для JPEG
  tiff: { quality: 80 }, // Параметри оптимізації для TIFF
  gif: {}, // Параметри оптимізації для GIF (можна додати при необхідності)
  webp: { quality: 80, lossless: false }, // Параметри оптимізації для WebP
  avif: { quality: 80, lossless: false }, // Параметри оптимізації для AVIF
  cache: true, // Використовуємо кеш для швидшої роботи
}

export default imageOptimizerOptions
