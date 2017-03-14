# WeatherForecastSample
A sample weather  forecast app

#Ubuntu instructions

Install node

```
sudo apt-get install nodejs npm -y
```

Create a virtual link from node to nodejs
```
sudo apt-get install nodejs npm -y
```

Install n package

```
sudo npm install n
```

Install nodejs 6

```
sudo n 6.10.0
```

Clone the repository

```
git clone https://github.com/GabrielFerrarini/WeatherForecastSample.git

or

git clone git@github.com:GabrielFerrarini/WeatherForecastSample.git
```

From inside the Server folder execute
```
npm install
npm start
```

Test
```
curl -X GET "http://localhost:3000/forecast/Cities/New%20York"
curl -X GET "http://localhost:3000/forecast/us/10001"
curl -X GET "http://localhost:3000/forecast/Cities/Americana"
curl -X GET "http://localhost:3000/forecast/br/13465000"
```