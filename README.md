# WeatherForecastSample
A sample weather  forecast app

It makes use of
```
babel-cli - 6.24.0
babel-preset-es - 20156.24.0
express - 4.15.2
superagent - 3.5.0
```

#Accounts needed
1. Get your accouts

Get a username here: http://www.geonames.org/login
After verifying it, activate it for free web services here: http://www.geonames.org/manageaccount
Take note of your username

Get an account here: https://home.openweathermap.org/users/sign_up

Take note of your apikey

#Ubuntu instructions

2. Install node

```
sudo apt-get install nodejs npm -y
```

3. Create a virtual link from node to nodejs
```
sudo ln -s /usr/bin/nodejs /usr/bin/node
```

4. Install n package

```
sudo npm install n
```

5. Install nodejs 6

```
sudo n 6.10.0
```

6. Clone the repository

```
git clone https://github.com/GabrielFerrarini/WeatherForecastSample.git

or

git clone git@github.com:GabrielFerrarini/WeatherForecastSample.git
```

7. Update src/geoLocModel to use your geonames username
8. Update src/weatherModel to use your openweathermap api key

9. From inside the Server folder execute
```
npm install
npm start
```

10. Test
```
curl -X GET "http://localhost:3000/forecast/Cities/New%20York"
curl -X GET "http://localhost:3000/forecast/us/10001"
curl -X GET "http://localhost:3000/forecast/Cities/Americana"
curl -X GET "http://localhost:3000/forecast/br/13465000"
```