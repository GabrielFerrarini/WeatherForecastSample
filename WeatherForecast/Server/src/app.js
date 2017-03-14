import ForecastService from "./forecastService.js";
import Forecast from "./forecast.js";

let express = require('express');
let app = express();

app.get("/", function (req, res) {
    res.send("Welcome to the Weather Forecast App!");
});

app.get("/forecast/cities/:cityname", function (req, res) {
    ForecastService.getByCityName(req.params.cityname)
        .then((data) => {
            let responseBody = new Forecast(data);
            res.send(responseBody);
        }, (error) => {
            res.send(error);
        });
});

app.get("/forecast/codes/:country/:zipcode", function (req, res) {
    ForecastService.getByZipCode(req.params.country, req.params.zipcode)
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