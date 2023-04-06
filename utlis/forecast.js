const request = require("request")

// const url1 = "http://api.weatherstack.com/current?access_key=7e60e71feea4099756f146597d6f9b35&query=23.258477602436, 72.6493030165295&units=f"


const foreCast = (coordinates,callback) => {
    const url = "http://api.weatherstack.com/current?access_key=7e60e71feea4099756f146597d6f9b35&query=" + coordinates.latitude + "," + coordinates.longitude + "&units=f"
    request({url:url, json:true},(error, {body})=>{
        // console.log(response);
        if(error){
            callback("Unable to connect to weather services",undefined)
        } else if(body.error){
            callback("Unable to find location", undefined)
        }
        else{
            const data = body.current
            // console.log(url)
            callback(undefined,"It is currently "+ data.temperature + " degree out. It feels like " + data.feelslike + " degrees out.")
        }
    })
}

module.exports = foreCast