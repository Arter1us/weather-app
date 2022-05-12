import React from "react";

import "./weather-city.scss";

const WeatherCity = ({ data }) => {

    const { timezone, currentDt, currentTemp } = data;

    const getTimeRemaining = (UNIX_timestamp) => {
        //let weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        let t = new Date(UNIX_timestamp * 1000);
        const thisDate = new Date();
        const Months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const Month = Months[thisDate.getMonth()];
        const Day = thisDate.getDate();
        const Hour = t.getHours();

        return `${Day} ${Month} ${Hour}:00`;
    };

    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    return (
        <div className="city">
            <h2 className="city__name">{timezone}</h2>
            <div className="city__date">{addZero(getTimeRemaining(currentDt))}</div>
            <div className="city__temperature">{Math.round(currentTemp)}°C</div>
            {/* {console.log(data)} */}
        </div>
    );
};

export default WeatherCity;