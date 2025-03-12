// src/config/svgoConfig.ts

const svgoConfig = {
  plugins: [
    { removeTitle: true }, // Видаляє теги <title>
    { removeDesc: true }, // Видаляє теги <desc>
    { removeDimensions: true }, // Видаляє атрибути width/height для масштабованих SVG
    { removeUselessDefs: true }, // Видаляє непотрібні елементи <defs>
    { removeXMLNS: true }, // Видаляє простір імен XML, якщо він не потрібен
    { cleanupIDs: true }, // Очищає ідентифікатори (ID) елементів
    { collapseGroups: true }, // Об'єднує елементи <g> з однаковими атрибутами
    { removeRasterImages: true }, // Видаляє растрові зображення з SVG
    { minifyStyles: true }, // Мінімізує CSS стилі в SVG
    { removeEmptyContainers: true }, // Видаляє порожні елементи контейнерів
    { removeEmptyText: true }, // Видаляє порожні елементи тексту
    { removeHiddenElems: true }, // Видаляє приховані елементи
    { removeUnusedNS: true }, // Видаляє невикористовувані простори імен
    { convertShapeToPath: true }, // Перетворює форми (прямокутники, кола) в шляхи
    { convertPathData: true }, // Оптимізує дані шляху
    { removeViewBox: true }, // Видаляє атрибут viewBox, якщо не потрібен
    { sortAttrs: true }, // Сортує атрибути SVG

    // Додаємо налаштування для заміни атрибутів fill та stroke на currentColor
    { inlineStyles: true }, // Вбудовує стилі в атрибути
    {
      name: 'convertStyleToAttrs',
      params: {
        // Це перетворює властивості fill і stroke в атрибути, що використовують currentColor
        fill: 'currentColor',
        stroke: 'currentColor',
      },
    },
  ],
}

export default svgoConfig
