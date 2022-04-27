import React  from 'react';
import CountryData from "./CountryData";

{/*const getWeather = (lat, lng) => {
    const apiKey = `${process.env.REACT_APP_API_KEY}`;
    const url = `${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${lng}&appid=${apiKey}`;
    return fetch(url).then(response => response.json());
}*/}

function showCountryData (country) {
    const lat = country.latlng[0];
    const lng = country.latlng[1];
    {/*const weatherData = getWeather(lat, lng);*/}
    const urlMap = `https://www.google.com/maps/@${lat},${lng},10z`;
    return (
        <CountryData country={country} map={urlMap} /*weather={weatherData}*/ />
    )
}

const Display = (props) => { 
    const data = props.data;
    if (data.length > 10) {
        return (
          <p>Too many matches, filter should be more specific</p>
        );
    } else if (data.length > 1 && data.length <= 10) {
        return (
            <ul>
                {data.map((country) => (
                    <li key={country.capital}>
                        {country.name} <button onClick={() => showCountryData(country)}>show</button>
                    </li> 
                ))}
            </ul>
        )
    } else if (data.length === 1) {
        const lat = data[0].latlng[0];
        const lng = data[0].latlng[1];
        {/*const weatherData = getWeather(lat, lng);*/}
        const urlMap = `https://www.google.com/maps/@${lat},${lng},10z`;
        return (
            <CountryData country={data[0]} map={urlMap} /*weather={weatherData}*/ />
        )
    }
};
  
export default Display;