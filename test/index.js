var expect = require('chai').expect,
  cp = require('child_process')
var path = require('path')
var apiKey = require(path.join('..', 'config.json')).openWeatherApiKey // USE YOUR OWN KEY!
var weather = require(path.join('..', 'weather-module.js'))
var http = require('http')
var city = 'New York'
describe('weather app', function () {
  it('must return forecast for the given city', function(done){
    weather(apiKey, city, function(error, results){
      expect(error).to.be.null
      expect(results.city).to.deep.equal({
        id: 5128638,
        name: 'New York',
        coord: { lon: -75.499901, lat: 43.000351 },
        country: 'US',
        population: 0,
        sys: { population: 0 }
      })
      expect(results.list).to.be.an('array')
      expect(results.list.length).to.equal(results.cnt)
      done()
    })
  })
})
