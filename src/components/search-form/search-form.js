import React from "react";
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';

import './search-form.scss';
import Loupe from '../../img/loupe.svg';

const SearchForm = ({ searchCity, updateCity, cityList }) => {

    const renderItems = (arr) => {
        const items = arr.map((item, i) => {
            return (
                <li
                    className="search__city"
                    key={i}
                    onClick={() => {
                        updateCity(item.lat, item.lon);
                    }}>
                    {item.name}, {item.country}
                </li>
            );
        });
        return <ul className="search__list hide">{items}</ul>
    };

    const items = renderItems(cityList);

    return (
        <div className="search">
            <Formik
                initialValues={{
                    city: ''
                }}
                validationSchema={Yup.object({
                    city: Yup.string().required('City not found')
                })}
                onSubmit={({ city }) => {
                    searchCity(city);
                }}
            >
                <Form>
                    <Field
                        className="search__input"
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Enter city" />
                    <button type="submit" className="search__btn"><img src={Loupe} alt="loupe" /></button>
                    <FormikErrorMessage component="div" className="error" name="city" />
                </Form>
            </Formik>
            <div className="search__wrapper">
                {items}
            </div>
        </div>
    );
};

export default SearchForm;