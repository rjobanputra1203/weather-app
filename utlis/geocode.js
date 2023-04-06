const request = require("request")

const geoCode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoidmFpYmhhdnNodWtsYTE1NCIsImEiOiJjbGU2dzZrNzIwcXRkM3FtbmI3Z3Zmc2U1In0.oG4p7fr07JGSvjNAYDwmWA&limit=1"
    request({ url: url, json: true }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather services",undefined)
        } else if (body.features.length === 0) {
            callback("No matching address found",undefined)
        }
        else {
            callback(undefined, {
            latitude: body.features[0].center[1],
            longitude: body.features[0].center[0],
            location: body.features[0].place_name
            })
            
        }
    })
}

module.exports = geoCode