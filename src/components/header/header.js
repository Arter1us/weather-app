import React from "react";

import SearchForm from "../search-form/search-form";

import './header.scss';
import logo from '../../img/logo.svg'

const Header = ({ searchCity, updateCity, cityList }) => {
    return (
        <div className="header bg-primary">
            <div className="container d-flex position">
                <div className="logo">
                    <img className="logo__img" src={logo} alt="logo" />
                    <div className="logo__title">Weather App</div>
                </div>
                <SearchForm searchCity={searchCity} updateCity={updateCity} cityList={cityList} />
                <button type="submit" className="btn">°C / °F</button>
            </div>
        </div>
    );
};

export default Header;