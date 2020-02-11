const location = require("./location_provider");
const axios = require("axios");
const apiKeyWeather = "83fdd2b816c9a3a893559f8ac5e6ca47";


const getWeather = async(direction) => {

    try {
        let locationData = await location.getLocation(direction);
        let data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=${apiKeyWeather}`);

        let weather = {
            "weather": data.data.weather[0].main,
            "temp": data.data.main.temp - 273,
        }

        return weather;
    } catch (e) {
        throw new Error("No existe clima para la localizacion");
    }


}

module.exports = {
    getWeather,
}