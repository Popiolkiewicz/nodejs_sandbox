const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=4ced830e60e4322a33349971bfc0b5cc&query=37.8267,-122.4233&units=m';

request.get({ url: url, json: true}, (error, response) => {
  const data = response.body;
  console.log('Temperature: ' + data.current.temperature);
  console.log('Rain precip (%): ' + data.current.precip);
});