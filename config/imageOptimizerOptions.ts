const imageOptimizerOptions = {
  test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
  include: ['src/assets/img/**/*.{png,jpg,jpeg,gif,tiff,webp,avif}'],
  includePublic: false,
  logStats: true,
  ansiColors: true,
  png: { quality: 80 },
  jpeg: { quality: 85 },
  jpg: { quality: 85 },
  tiff: { quality: 80 },
  gif: {},
  webp: { quality: 80, lossless: false },
  avif: { quality: 80, lossless: false },
  cache: true,
}

export default imageOptimizerOptions
