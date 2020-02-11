const axios = require("axios");

let getLocation = async(direction) => {

    try {
        const instance = axios.create({
            baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direction}`,
            headers: { "x-rapidapi-key": "38d1074181mshd0a36ff26e5731ap13c33bjsnc574c7d98f2c" }
        });
        let resp = await instance.get()


        let location = {
            "city": resp.data.Results[0].name,
            "lat": resp.data.Results[0].lat,
            "lon": resp.data.Results[0].lon,
        }


        return location;
    } catch (e) {
        throw new Error("No es un lugar valido");

    }

}


module.exports = {
    getLocation,
}