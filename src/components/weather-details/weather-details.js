import { useState, useEffect } from "react";
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import WeatherService from "../../services/weather-service";

import './weather-details.scss';

const WeatherDetails = () => {

    const weatherService = new WeatherService();

    const [city, setCity] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        updateCity();
    }, [])

    const updateCity = () => {
        onCityLoading();
        weatherService.getCity("London")
            .then(onCityLoaded)
            .catch(onError);
    };

    const onCityLoading = () => {
        setLoading(true);
    };

    const onCityLoaded = (city) => {
        setLoading(false);
        setCity(city);
    };

    const onError = () => {
        setError(true);
    };

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <View city={city} /> : null;
    return (
        <div className="details" >
            {errorMessage}
            {content}
            {spinner}
        </div>
    );
};

const View = ({ city }) => {
    return (
        <div className="container">
            <h2 className="details__title">{city.name}</h2>
            <div className="details__wrapper">
                <div className="details__element">
                    <div className="details__title">Clouds</div>
                    <div className="details__value">{city.clouds} %</div>
                </div>
                <div className="details__element">
                    <div className="details__title">Humidity</div>
                    <div className="details__value">{city.humidity} %</div>
                </div>
                <div className="details__element">
                    <div className="details__title">Wind Speed</div>
                    <div className="details__value">{city.windSpeed} m/sec</div>
                </div>
                <div className="details__element">
                    <div className="details__title">Visibility</div>
                    <div className="details__value">{city.visibility} m</div>
                </div>
                <div className="details__element">
                    <div className="details__title">Pressure</div>
                    <div className="details__value">{city.pressure} hPa</div>
                </div>
            </div>
        </div>
    );
}

export default WeatherDetails;