import { Container } from '@mui/material';
import './App.css';

import React from 'react';
import { useState } from 'react';
// import Search from './components/Search/Search';
// import Home from './components/Home/Home';

const api = {
  key: `${process.env.REACT_APP_API_KEY}`,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
      .then(res => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className='input-box'>
        <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
        <button className='search-button' onClick={searchPressed}>Search</button>
      </div>

      {/* result container held by terinary operator(preventing undefined error) */}
      {typeof weather.main !== "undefined" ? (
        <div className='result-container'>
        <p>{weather.name}</p>
        <p>{weather.main.temp}</p>
        <p>{weather.weather[0].main}</p>
        <p>({weather.weather[0].description})</p>
      </div>
      ) : ("")}
    </div>
    // <Home/>
    // <Search/>
  )
};

export default App;
