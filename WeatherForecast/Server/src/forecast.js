
class Forecast {
    constructor(data) {
        this.cityName = data.city.name;
        this.forecasts = data.list.map((item, index) => {
            return new ForeCastItem(item.dt, item.temp.min, item.temp.max, item.pressure, item.humidity, item.weather.main, item.weather.description, item.speed);
        });
    }
}

class ForeCastItem {
    constructor(date, min, max, pressure, humidity, mainWeather, mainWeatherDescription, speed) {
        let dt = new Date(date * 1000);
        this.date = dt.toISOString();
        this.min = min;
        this.max = max;
        this.pressure = pressure;
        this.humidity = humidity;
        this.mainWeather = mainWeather;
        this.mainWeatherDescription = mainWeatherDescription;
        this.windSpeed = speed;
    }
}

export default Forecast;