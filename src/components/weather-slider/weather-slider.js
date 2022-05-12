import { useState, useEffect } from "react";
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import WeatherService from "../../services/weather-service";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./weather-slider.scss";

const WeatherSlider = () => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2
    };

    const weatherService = new WeatherService();

    const [hourlyData, setHourlyData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        updateCity();
    }, [])

    const updateCity = () => {
        onCityLoading();
        weatherService.getHourlyData("51.5073219", "-0.1276474")
            .then(onCityLoaded)
            .catch(onError);
    };

    const onCityLoading = () => {
        setLoading(true);
    };

    const onCityLoaded = (city) => {
        setHourlyData(city);
        setLoading(false);
    };

    const onError = () => {
        setError(true);
        setLoading(false);
    };

    const getTimeRemaining = (UNIX_timestamp) => {
        let t = new Date(UNIX_timestamp * 1000);
        let hour = t.getHours();
        let time = hour;
        return time;
    };

    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            return (
                <div className="weather__element" key={i} >
                    <h3 className="weather__time">{addZero(getTimeRemaining(item.dt))}:00</h3>
                    <img className="weather__icon" src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon" />
                    <div className="weather__temp">{Math.round(item.temp)} °C</div>
                </div>
            );
        });

        return (
            <Slider {...settings}>
                {items}
            </Slider>
        );
    };

    const items = renderItems(hourlyData);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;

    return (
        <div className="settings">
            {errorMessage}
            {spinner}
            {content}
        </div>
    );
};

export default WeatherSlider;