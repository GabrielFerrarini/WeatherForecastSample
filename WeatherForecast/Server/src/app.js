import WeatherModel from "./weatherModel.js";
import Forecast from "./forecast.js";

let express = require('express');
let app = express();

app.get("/", function (req, res) {
    res.send("Welcome to the Weather Forecast App!");
});

app.get("/forecast/cities/:cityname", function (req, res) {
    let model = new WeatherModel();

    model.getByCityName(req.params.cityname)
        .then((data) => {
            let responseBody = new Forecast(data);
            res.send(responseBody);
        }, (error) => {
            res.send(error);
        });
});

app.get("/forecast/codes/:zipcode", function (req, res) {
    let model = new WeatherModel();

    model.getByZipCode(req.params.zipcode)
        .then((data) => {
            let responseBody = new Forecast(data);
            res.send(responseBody);
        }, (error) => {
            res.send(error);
        });
});

app.listen(3000, function () {
    console.log("Weather Forecast App ready on port 3000!");
});