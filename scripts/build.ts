import { createChunks } from './create-chunks'
import { fetchRawData } from './fetch-raw-data'
import { flattenRawData } from './flatten-data'

async function main() {
  try {
    const start = Date.now()

    console.log('Fetching JSON data...')
    await fetchRawData()

    console.log('Flattening JSON data...')
    await flattenRawData()

    console.log('Creating chunks...')
    await createChunks()

    const end = Date.now()
    console.log(`Done in ${((end - start) / 1000).toFixed(2)} seconds`)
  }
  catch (error) {
    console.error('Error building data:', error)
  }
}

main()
