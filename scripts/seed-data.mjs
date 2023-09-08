import db from '@begin/data'
async function main() {
  await db.set({
    table: 'links',
    key: 'link1',
    text: 'Custom properties',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/--*',
    published: true
  })

  await db.set({
    table: 'links',
    key: 'link2',
    text: 'Calc',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/calc',
    published: true
  })

  await db.set({
    table: 'links',
    key: 'link3',
    text: 'Creating color themes with custom properties',
    url: 'https://css-tricks.com/creating-color-themes-with-custom-properties-hsl-and-a-little-calc/',
    published: true
  })

  await db.set({
    table: 'links',
    key: 'link4',
    text: 'Theming with CSS Custom Properties (variables) and calc()',
    url: 'https://itnext.io/theming-with-css-custom-properties-variables-and-calc-a89b37ad0013',
    published: true
  })

  await db.set({
    table: 'links',
    key: 'link5',
    text: 'Calculating Color: Dynamic Color Theming with Pure CSS',
    url: 'https://una.im/css-color-theming/',
    published: true
  })
}
main()
