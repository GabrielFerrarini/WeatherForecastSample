import Model from "./model";
import GeoLocModel from "./geoLocModel";

class WeatherModel extends Model {
    initialize() {
        this.endpoint = "http://api.openweathermap.org/data/2.5/forecast/daily";
        this.queryString = [];
        this.queryString.push({ cnt: "5" });
        this.queryString.push({ mode: "json" });
        this.queryString.push({ units: "metric" });
        this.queryString.push({ APPID: "<<apikey>>" });
    }
}

export default WeatherModel;