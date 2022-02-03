import React from "react";

import WeatherCity from "../weather-city";
import WeatherSlider from '../weather-slider';

import "./weather-display.scss";

const WeatherDisplay = () => {
    return (
        <div className="container display">
            <WeatherCity />
            <WeatherSlider />
        </div>
    );
};

export default WeatherDisplay;