//requires
//Con el metodo "options" usamos -d sin comando intermedio, directo en la raiz
const argv = require("yargs").options({
    direction: {
        alias: "d",
        description: "Direccion de la ciudad",
        demand: true,
    }
}).argv;

const weatherProvider = require("./providers/weather_provider");
//end reqires
let uriDirection = encodeURI(argv.direction);

const getLocationWeather = async() => {

    let weather = await weatherProvider.getWeather(uriDirection);
    console.log(`El tiempo en ${argv.direction} es: ${weather.weather} y la temperatura es: ${weather.temp.toFixed(0)}ºC`);
}

getLocationWeather();