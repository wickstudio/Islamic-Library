# Islamic Library by Wick Studio

Islamic Library Package is a Node.js library developed by Wick Studio, offering easy access to Islamic Adkar (supplications) and prayer times based on location.

## Features

- Morning, evening, and night Adkar.
- Prayer times for any given location.

## Installation

```bash
npm install islamic-library
```

## Usage

### Adkar

```javascript
const { getMorningAdkar, getEveningAdkar, getNightAdkar } = require('islamic-library');

// Fetch Morning Adkar
getMorningAdkar().then(adkar => {
    console.log(adkar);
});

// Fetch Evening Adkar
getEveningAdkar().then(adkar => {
    console.log(adkar);
});

// Fetch Night Adkar
getNightAdkar().then(adkar => {
    console.log(adkar);
});
```

### Prayer Times

```javascript
const { getPrayerTimes } = require('islamic-library');

// Fetch Prayer Times
getPrayerTimes(latitude, longitude).then(prayerTimes => {
    console.log(prayerTimes);
});

```

## API Reference

- Morning, Evening, Night Adkar : Fetch respective Adkar.
- Prayer Times : Fetch prayer times using latitude and longitude.

## Credits and Acknowledgments

- Adkar data powered by [Wick Studio's Adkar API](https://islamicadkar.xyz/).
- Prayer times provided by [AlAdhan Prayer Times API](https://aladhan.com/prayer-times-api).
- This package and the Adkar API's source code are available on GitHub.

## Connect with Wick Studio

- [GitHub](https://github.com/wickstudio)
- [Discord](https://discord.gg/wicks)
- [YouTube](https://www.youtube.com/@wick_studio)

## Contributing

Contributions are welcome. Please follow the guidelines:
- Clean, commented code.
- Update tests and README as needed.
- Adhere to the existing code style.

## License

Licensed under the [MIT License](LICENSE).