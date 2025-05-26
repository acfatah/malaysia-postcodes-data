# Malaysia Postcodes Data

<p>
  <a href="./LICENSE">
  <img alt="GitHub" src="https://img.shields.io/github/license/acfatah/malaysia-postcodes-data?style=flat-square"></a>

  <a href="https://github.com/acfatah/malaysia-postcodes-data/commits/main">
  <img alt="GitHub last commit (by committer)" src="https://img.shields.io/github/last-commit/acfatah/malaysia-postcodes-data?display_timestamp=committer&style=flat-square"></a>
</p>

Flattened JSON objects list of Malaysia postcodes data, sorted by the postcode number.

> [!IMPORTANT]
> Original data is pulled from [AsyrafHussin/malaysia-postcodes][1]. Credit belongs to the respective owner.

See the [changelog][2].

## Why Create Another Repository?

### The Problem:

When users need to input their address, they often have to manually type their
city and state, which can be prone to errors. Additionally, querying a full
database for postcode information can be slow and resource-intensive.

### Our Solution:

This repository offers a lightweight and efficient solution to auto-populate
city and state fields based on a postcode input. By extracting the first two
digits from the postcode, we can quickly narrow down the possible locations
and suggest accurate inputs without the need for a comprehensive database query.

### How It Works:
Here's a simple example of how to use the repository to fetch city and state suggestions:

```javascript
// Assuming 'postcodeInput' is a string containing the postcode entered by the user.
const [_, prefix] = postcodeInput.match(/(\d{2})\d{3}/)

// Fetch the relevant postcode data using the first two digits as a prefix.
const response = await fetch(`https://raw.githubusercontent.com/acfatah/malaysia-postcodes-data/refs/heads/main/dist/${prefix}xxx-postcodes.json`)
const postcodes = await response.json()

// Now you can use 'postcodes' to suggest city and state names.
```

### CDN Link Examples

<details>
  <summary>jsdelivr.com</summary>
  <pre>
https://cdn.jsdelivr.net/npm/@acfatah/malaysia-postcodes-data@2.0.0/dist/01xxx-postcodes.json
  </pre>
</details>

<details>
  <summary>unpkg.com</summary>
  <pre>
https://unpkg.com/@acfatah/malaysia-postcodes-data@2.0.0/dist/01xxx-postcodes.json
  </pre>
</details>

<details>
  <summary>skypack.dev</summary>
  <pre>
https://cdn.skypack.dev/@acfatah/malaysia-postcodes-data@v2/dist/01xxx-postcodes.json
  </pre>
</details>

### Advantages:
- Performance: This method is fast as it avoids loading the entire postcode
  dataset into memory.

- Ease of Use: Developers can integrate this functionality without setting up
  and maintaining a separate database.

- Scalability: It scales well because each request only retrieves a small,
  specific subset of data.

By utilizing this approach, we can significantly improve user experience by
streamlining the form completion process and reducing input errors.

[1]: https://github.com/AsyrafHussin/malaysia-postcodes?tab=readme-ov-file#malaysia-postcodes
[2]: https://github.com/AsyrafHussin/malaysia-postcodes/blob/main/CHANGELOG.md
