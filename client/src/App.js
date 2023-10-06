import './App.css';

import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const api = {
  key: "2983bd3b52b446b8a24e7adde78a747d",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then((result) => {
        setWeather(result);
      });
  };
  
  return (
    <div className="App">
      <h1>GYATTT</h1> 
      <div className='input-box'>
        <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={searchPressed}>Search</button>
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
  )
};

export default App;
