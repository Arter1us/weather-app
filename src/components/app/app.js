import { useState, useEffect } from "react";
import ErrorBoundary from "../error-boundary";
import Spinner from '../spinner';
import ErrorMessage from '../error-message';
import Header from "../header";
import WeatherDetails from "../weather-details/weather-details";
import WeatherDisplay from "../weather-display";
import WeatherService from "../../services/weather-service";

const App = () => {

    const weatherService = new WeatherService();

    const [data, setData] = useState({});
    const [cityList, setCityList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        updateCity();
    }, [])

    const updateCity = (id1 = "51.5073219", id2 = "-0.1276474") => {
        setCityList([]);
        onCityLoading();
        weatherService.getCity(id1, id2)
            .then(onCityLoaded)
            .catch(onError);
    };

    const searchCity = (label) => {
        weatherService.getCities(label)
            .then(onCityListLoaded)
            .catch(onError);
    };

    const onCityLoading = () => {
        setLoading(true);
    };

    const onCityListLoaded = (city) => {
        setCityList(city)
    };

    const onCityLoaded = (city) => {
        setData(city);
        setLoading(false);
    };

    const onError = () => {
        setError(true);
        setLoading(false);
    };

    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const content = !(loading || error) ?
        <div>
            <ErrorBoundary>
                <Header searchCity={searchCity} updateCity={updateCity} cityList={cityList} />
                <WeatherDisplay data={data} />
                <WeatherDetails data={data} />
            </ErrorBoundary>
        </div> : null;

    return (
        <>
            {spinner}
            {errorMessage}
            {content}
        </>
    );
};

export default App;