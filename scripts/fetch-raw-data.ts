const url = 'https://raw.githubusercontent.com/AsyrafHussin/malaysia-postcodes/refs/heads/main/all.json'

export async function fetchRawData() {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.text()
    Bun.write('./data/postcodes.json', data)

    return data
  }
  catch (error) {
    console.error('Error fetching JSON data:', error)
  }
}
