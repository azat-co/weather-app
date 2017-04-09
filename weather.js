var city = process.argv[2]

if (!city) return console.error('Please provide city')

var weather = require('./weather-module')

var apiKey = require('./config.json').openWeatherApiKey

weather(apiKey, city, function(error, results) {
  results.list.forEach(function(forecast){
    console.log(forecast.dt_txt, forecast.main.temp, 'F')
  })
})