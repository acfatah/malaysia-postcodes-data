import { appendFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

import type { PostcodeRecord } from '../types'

async function flatten() {
  const data = await import('../data/postcodes.json')

  if (!data) {
    throw new Error(`No 'data/postcodes.json' file found`)
  }

  const postcodes = Object.values(data.state)
  let output = []

  if (!data || postcodes.length === 0) {
    throw new Error('No data found')
  }
  else if (!postcodes) {
    throw new Error('Data structure has changed')
  }

  console.log('- Flattening data...')
  for (const state of postcodes) {
    for (const city of state.city) {
      for (const postcode of city.postcode) {
        output.push({ postcode, city: city.name, state: state.name })
      }
    }
  }

  // sort by postcode
  console.log('- Sorting data...')
  output = output.sort((a, b) => a.postcode.localeCompare(b.postcode))

  return output
}

async function writeToFile(data: PostcodeRecord[]) {
  const filePath = path.join(__dirname, '..', '/dist/all-postcodes.json')
  const count = data.length

  console.log('- Writing to file...')

  // empty the output file
  await writeFile(filePath, '')

  // the beginning of the file
  await appendFile(filePath, `[\n`)

  // write the output as single line object
  for (const [index, item] of data.entries()) {
    await appendFile(filePath, `  { "postcode": "${item.postcode}", "city": "${item.city}", "state": "${item.state.replace('Wp ', '')}" }${index < count - 1 ? ',' : ''}\n`)
  }

  // the end of the file
  await appendFile(filePath, `]\n`)
}

export async function flattenRawData() {
  await writeToFile(await flatten())
}
