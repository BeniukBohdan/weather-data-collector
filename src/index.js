// weather-collector.js

const WeatherAPI = require('weather-information-api');

class WeatherCollector {
  constructor(apiKey) {
    this.weatherAPI = new WeatherAPI(apiKey);
  }

  async getWeatherForLocation(city) {
    try {
      const weatherData = await this.weatherAPI.getWeatherByCity(city);
      return weatherData;
    } catch (error) {
      throw new Error(`Failed to fetch weather data for ${city}: ${error.message}`);
    }
  }
}

module.exports = WeatherCollector;
