import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./weather-slider.scss";

import WeatherLogo from '../../img/vector.svg';

const WeatherSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className="settings">
            <Slider {...settings}>
                <div>
                    <h3 className="weather__time">08:00</h3>
                    <img className="weather__icon" src={WeatherLogo} alt="icon" />
                    <div className="weather__temp">13 °C</div>
                </div>
                <div>
                    <h3 className="weather__time">09:00</h3>
                    <img className="weather__icon" src={WeatherLogo} alt="icon" />
                    <div className="weather__temp">13 °C</div>
                </div>
                <div>
                    <h3 className="weather__time">10:00</h3>
                    <img className="weather__icon" src={WeatherLogo} alt="icon" />
                    <div className="weather__temp">13 °C</div>
                </div>
                <div>
                    <h3 className="weather__time">11:00</h3>
                    <img className="weather__icon" src={WeatherLogo} alt="icon" />
                    <div className="weather__temp">13 °C</div>
                </div>
                <div>
                    <h3 className="weather__time">12:00</h3>
                    <img className="weather__icon" src={WeatherLogo} alt="icon" />
                    <div className="weather__temp">13 °C</div>
                </div>
                <div>
                    <h3 className="weather__time">13:00</h3>
                    <img className="weather__icon" src={WeatherLogo} alt="icon" />
                    <div className="weather__temp">13 °C</div>
                </div>
                <div>
                    <h3 className="weather__time">14:00</h3>
                    <img className="weather__icon" src={WeatherLogo} alt="weather-logo" />
                    <div className="weather__temp">13 °C</div>
                </div>
            </Slider>
        </div>
    );
};

export default WeatherSlider;