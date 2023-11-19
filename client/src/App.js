import './App.css';
import React, { useState } from 'react';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [search, setSearch] = useState("");
  const [forecast, setForecast] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}forecast?q=${search}&units=imperial&cnt=5&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setForecast(result);
        console.log(result);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div className="App">
      <h1 className='title'>Open Air Weather</h1>
      <div className='container'>
        <div className='input-box'>
          <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
          <button className='search-button' onClick={searchPressed}>Search</button>
        </div>

        {forecast.list && forecast.list.length > 0 ? (
          <div className='result-container'>
            <div className='current-weather'>
              <p>Current Weather: {forecast.list[0].main.temp}&deg;F</p>
              <p>Feels Like: {forecast.list[0].main.feels_like}&deg;F</p>
              <p>High: {forecast.list[0].main.temp_max}&deg;F</p>
              <p>Low: {forecast.list[0].main.temp_min}&deg;F</p>
            </div>
            {forecast.list.map(item => (
              <div key={item.dt} className='next-hour'>
                <p>{new Date(item.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</p>
                <p>{item.main.temp}</p>
                <p>{item.weather[0].main}</p>
                {/* <p>({item.weather[0].description})</p> */}
              </div>
            ))}
          </div>
        ) : (
          <p></p>
        )}

      </div>
    </div>
  );
}

export default App;