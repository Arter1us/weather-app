import React from "react";

import WeatherCity from "../weather-city";
import WeatherSlider from '../weather-slider';

import "./weather-display.scss";

const WeatherDisplay = ({ data }) => {
    return (
        <div className="container display">
            <WeatherCity data={data} />
            <WeatherSlider />
        </div>
    );
};

export default WeatherDisplay;