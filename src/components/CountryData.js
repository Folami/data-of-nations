import React  from 'react';

const CountryData = (props) => {
    return (
        <div>
            <h2>{props.country.name}</h2>
            <p>Capital : {props.country.capital}</p>
            <p>Area : {props.country.area}</p>
            <p>population {props.country.population}</p>
            <img src={props.country.flags.svg} alt={props.country.flags.png} width="200" />
            <a href={props.map}>Map</a>
            <h3>Languages</h3>
            <ul>
                {props.country.languages.map((language) => (
                    <li key={language.id}>{language}</li>
                ))}
            </ul>
            {/*<h3>Weather in {props.country.capital}</h3>
            <p>Temperature : {props.weather.main.temp}</p>
            <img src={`http://openweathermap.org/img/w/${props.weather.weather[0].icon}.png`} alt={props.weather.weather[0].description} />
            <p>Wind : {props.weather.wind.speed}</p>
            <p>{props.weather.weather[0].description}</p>*/}
        </div>    
    )
}

export default CountryData;