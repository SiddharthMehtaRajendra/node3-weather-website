const request = require('request')

const forecast = (latitude, longitude, callback) => { 
    const url = "https://api.darksky.net/forecast/17eb35684ae850d0758b89993d9c7b0e/" + latitude + ',' + longitude

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error){
            callback('Unable to find location. Try Again', undefined)
        } else {
            callback(undefined, response.body.currently)
        }
    })
}

module.exports = forecast