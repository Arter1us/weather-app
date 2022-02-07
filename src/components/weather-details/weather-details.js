import React from "react";
import WeatherService from "../../services/weather-service";

import './weather-details.scss';

const WeatherDetails = () => {

    const weatherService = new WeatherService();

    // componentDidMount() {
    //     this.weatherService
    //         .getCity("London")
    //         .then((city) => {
    //             console.log(city);
    //         })
    // }

    return (
        <div className="details" >
            <div className="container">
                <h2 className="details__title">Now</h2>
                <div className="details__wrapper">
                    <div className="details__element">
                        <div className="details__title">Chance of Rain</div>
                        <div className="details__value">12%</div>
                    </div>
                    <div className="details__element">
                        <div className="details__title">Humidity</div>
                        <div className="details__value">60%</div>
                    </div>
                    <div className="details__element">
                        <div className="details__title">Wind Speed</div>
                        <div className="details__value">10 k/h</div>
                    </div>
                    <div className="details__element">
                        <div className="details__title">Visibility</div>
                        <div className="details__value">100km</div>
                    </div>
                    <div className="details__element">
                        <div className="details__title">Pressure</div>
                        <div className="details__value">1015 hPa</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherDetails;