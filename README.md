# Weather Data Collector

A package to collect weather data for a specific location using the weather-information-api.

## Installation

You can install the package via npm:

```bash
npm install weather-data-collector
```

## Usage

First, import the `WeatherCollector` class from the package:

```javascript
const WeatherCollector = require('weather-data-collector');
```

Then, create an instance of `WeatherCollector` with your OpenWeatherMap API key:

```javascript
const apiKey = 'YOUR_API_KEY';
const collector = new WeatherCollector(apiKey);
```

You can fetch weather data for a location using the `getWeatherForLocation` method:

```javascript
const city = 'London';
try {
  const weatherData = await collector.getWeatherForLocation(city);
  console.log('Weather in London:', weatherData);
} catch (error) {
  console.error(error.message);
}
```

Replace `'YOUR_API_KEY'` with your actual OpenWeatherMap API key.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
