export default class WeatherService {

    _apiBase = "http://api.openweathermap.org/data/2.5/weather?q=";
    _apiKey = "50c21a902a61989ae5bc8efbca89ab79";

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}&appid=${this._apiKey}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    getCity = async (id) => {
        const city = await this.getResource(id);
        return this._getTransformCity(city);
    }

    _getTransformCity = (city) => {
        return {
            name: city.name,
            clouds: city.clouds.all,
            humidity: city.main.humidity,
            windSpeed: city.wind.speed,
            visibility: city.visibility,
            pressure: city.main.pressure
        }
    }

}