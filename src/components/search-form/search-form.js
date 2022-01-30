import React from "react";

import './search-form.scss';
import Loupe from '../../img/loupe.svg';

const SearchForm = () => {
    return (
        <form className="form">
            <input className="form__search" type="text" />
            <button className="form__btn"><img src={Loupe} alt="loupe" /></button>
        </form>
    );
};

export default SearchForm;