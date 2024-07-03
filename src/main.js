import fs from 'node:fs/promises'
import path from 'node:path'
import postcodes from '../data/raw-postcodes.json'

async function main() {
  let output = []

  // flatten the data
  for (const state of postcodes) {
    for (const city of state.city) {
      for (const postcode of city.postcode) {
        output.push({ postcode, city: city.name, state: state.name })
      }
    }
  }

  // sort by postcode
  output = output.sort((a, b) => a.postcode.localeCompare(b.postcode))

  const filePath = path.join(__dirname, '..', 'postcodes.json')

  // empty the output file
  await fs.writeFile(filePath, '')

  // the beginning of the file
  await fs.appendFile(filePath, `[\n`)

  // write the output as single line object
  for (const item of output) {
    await fs.appendFile(filePath, `  { "postcode": "${item.postcode}", "city": "${item.city}", "state": "${item.state}" },\n`)
  }

  // the end of the file
  await fs.appendFile(filePath, `]\n`)
}

main()
