import subsetFont from 'subset-font'
import { mkdir, readFile, writeFile } from 'node:fs/promises'

const source = 'Fonts'
const output = 'public/fonts'

const faces = [
  ['SFPRODISPLAYREGULAR.OTF', 400],
  ['SFPRODISPLAYMEDIUM.OTF', 500],
  ['SFPRODISPLAYBOLD.OTF', 700],
]

let charset = ''
for (let code = 0x20; code <= 0x7e; code += 1) charset += String.fromCharCode(code)
for (let code = 0xa0; code <= 0xff; code += 1) charset += String.fromCharCode(code)
for (let code = 0x2000; code <= 0x206f; code += 1) charset += String.fromCodePoint(code)
charset += '©®…‰‹›•·→←↑↓★☆✓✗±×÷§¶ƒ‡–—“”‘’'
charset += String.fromCodePoint(0x20ac, 0x2019, 0x2018)

await mkdir(output, { recursive: true })

for (const [file, weight] of faces) {
  const buffer = await readFile(`${source}/${file}`)
  const woff2 = await subsetFont(buffer, charset, { targetFormat: 'woff2' })
  const path = `${output}/sf-pro-display-${weight}.woff2`
  await writeFile(path, woff2)
  console.log(`${path}: ${Math.round(woff2.length / 1024)} KB`)
}
