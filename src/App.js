import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import Filter from "./components/Filter";
import Display from "./components/Display";
import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [showData, setShowData] = useState(false);
  const [filter, setFilter] = useState("....filter countries");
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [weatherData, setWeatherData] = useState([]);

  const hook = () => {
    console.log('effect')
    const promise = axios.get('https://restcountries.com/v3.1/all')
    {/*const promise2 = axios.get(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)*/}
    const eventHandler = response => {
      console.log('promise fulfilled')
      setCountries(response.data)
    }
    promise.then(eventHandler)
  }

  useEffect(hook, [])
  {/*console.log('render', persons.length, 'contacts')*/}

  const dataToShow = showData
    ?  countries.filter((country) => country.name.startsWith(filter))
    : countries;

  const handleFilterEntry = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  const handleDataSubmit = (event) => {
    setShowData(!showData);
  }

  return (
    <div>
      <h1>Country Data Search</h1>
      <Filter filter={filter} handleFilter={handleFilterEntry} handleData={handleDataSubmit} />
      <Display data={dataToShow} />
    </div>
  );
};

export default App;
