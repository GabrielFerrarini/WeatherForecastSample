import WeatherModel from "./weatherModel.js";
import GeoLocModel from "./geoLocModel.js";

class ForecastService {
    getByCityName(cityName) {
        let model = new WeatherModel();

        model.query({ q: cityName });

        let promise = new Promise((resolve, reject) => {
            model.get().then((data) => { resolve(data.body); });
        });

        return promise;
    }

    getByZipCode(zipCode) {
        let model = new WeatherModel();
        let geoLocModel = new GeoLocModel();

        let promise = new Promise((resolve, reject) => {
            geoLocModel
                .query({ postalcode: zipCode })
                .get()
                .then((data) => {
                    if (data.body.postalcodes.length === 0) {
                        reject("City not found!");
                    } else {
                        model.queryString.push({ lat: data.body.postalcodes[0].lat });
                        model.queryString.push({ lon: data.body.postalcodes[0].lng });

                        model.get().then((data) => { resolve(data.body); });
                    }
                });
        });

        return promise;
    }
}

let service = new ForecastService();
export default service;