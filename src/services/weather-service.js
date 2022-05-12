export default class WeatherService {

    _apiCurrentWeather = "http://api.openweathermap.org/data/2.5/weather?q=";
    _apiOneCall = "https://api.openweathermap.org/data/2.5/onecall?";
    _apiKey = "50c21a902a61989ae5bc8efbca89ab79";
    _apiCity = `http://api.openweathermap.org/geo/1.0/direct?q=`;

    getResource = async (url1, url2) => {
        const res = await fetch(`${this._apiOneCall}lat=${url1}&lon=${url2}&units=metric&exclude=minutely&appid=${this._apiKey}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url1} ${url2}, received ${res.status}`);
        }
        return await res.json();
    }

    getCitiesList = async (url) => {
        const res = await fetch(`${this._apiCity}${url}&limit=5&appid=${this._apiKey}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }

    getCities = async (id) => {
        const city = await this.getCitiesList(id);
        return city;
    }

    getCity = async (id1 = "51.5073219", id2 = "-0.1276474") => {
        const city = await this.getResource(id1, id2);
        return this._getTransformData(city);
    }

    getHourlyData = async (id1, id2) => {
        const date = await this.getResource(id1, id2);
        return date.hourly;
    }

    _getTransformData = (city) => {
        return {
            currentDt: city.current.dt,
            currentTemp: city.current.temp,
            timezone: city.timezone,
            clouds: city.current.clouds,
            humidity: city.current.humidity,
            windSpeed: city.current.wind_speed,
            visibility: city.current.visibility,
            pressure: city.current.pressure,
            dateTime: city.hourly
        }
    }

    _getTransformDate = (date) => {
        return {
            dateTime: date.hourly
        }
    }

    _getTimeRemaining = (UNIX_timestamp) => {
        let t = new Date(UNIX_timestamp * 1000);
        //let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        //let year = t.getFullYear();
        //let month = months[t.getMonth()];
        //let date = t.getDate();
        let hour = t.getHours();
        //let min = t.getMinutes();
        //let sec = t.getSeconds();
        //let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
        let time = hour;
        return time;
    };

}