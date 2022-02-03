import React from "react";

import "./weather-city.scss";

const WeatherCity = () => {
    return (
        <div className="city">
            <h2 className="city__name">London</h2>
            <div className="city__date">Sunday 07:09</div>
            <div className="city__temperature">12°C</div>
        </div>
    );
};

export default WeatherCity;