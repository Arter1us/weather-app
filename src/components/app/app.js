import React from "react";
import Header from "../header";
import WeatherDetails from "../weather-details/weather-details";
import WeatherDisplay from "../weather-display";

const App = () => {
    return <div>
        <Header />
        <WeatherDisplay />
        <WeatherDetails />
    </div>
};

export default App;