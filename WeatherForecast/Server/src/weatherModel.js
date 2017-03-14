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

    getByCityName(cityName) {
        let self = this;
        this.queryString.push({ q: cityName });

        let promise = new Promise((resolve, reject) => {
            self.get().then((data) => { resolve(data.body); });
        });

        return promise;
    }

    getByZipCode(zipCode) {
        let self = this;
        let geoLocModel = new GeoLocModel();

        let promise = new Promise((resolve, reject) => {
            geoLocModel.getGeoLocByZipCode(zipCode)
                .then((data) => {
                    if (data.body.postalcodes.length === 0) {
                        reject("City not found!");
                    } else {
                        self.queryString.push({ lat: data.body.postalcodes[0].lat });
                        self.queryString.push({ lon: data.body.postalcodes[0].lng });

                        self.get().then((data) => { resolve(data.body); });
                    }
                });
        });

        return promise;
    }
}

export default WeatherModel;