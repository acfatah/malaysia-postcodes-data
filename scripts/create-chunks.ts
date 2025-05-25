import { appendFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import type { PostcodeRecord } from '../types'

async function readJsonData(): Promise<PostcodeRecord[]> {
  const postcodes = await Bun.file('./dist/all-postcodes.json').json()

  return postcodes
}

async function writeToFile(prefix: string, filtered: PostcodeRecord[]) {
  const filePath = path.join(__dirname, '..', `/dist/${prefix}xxx-postcodes.json`)
  const count = filtered.length

  console.log(`- Writing to '${filePath}'...`)

  // empty the output file
  await writeFile(filePath, '')

  // the beginning of the file
  await appendFile(filePath, `[\n`)

  // write the output as single line object
  for (const [index, item] of filtered.entries()) {
    await appendFile(filePath, `  { "postcode": "${item.postcode}", "city": "${item.city}", "state": "${item.state.replace('Wp ', '')}" }${index < count - 1 ? ',' : ''}\n`)
  }

  // the end of the file
  await appendFile(filePath, `]\n`)
}

export async function createChunks() {
  const data = await readJsonData()
  let first = data[0]

  if (!first) {
    throw new Error('No data found')
  }

  do {
    const prefix = first.postcode.slice(0, 2)
    const filtered = data.filter(postcode => postcode.postcode.startsWith(prefix))

    await writeToFile(prefix, filtered)
    data.splice(0, filtered.length)

    first = data[0]
  } while (first)
}
