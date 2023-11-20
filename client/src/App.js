import './App.css';
import React, { useState } from 'react';
import SearchIcon from './components/Icons/searchicon';

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
          <input
            className='search-bar'
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                searchPressed();
              }
            }}
          />
          <button className='search-button' onClick={searchPressed}><svg className='search-icon' xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg></button>
        </div>

        {forecast.list && forecast.list.length > 0 ? (
          <div className='result-container'>
            <div className='current-weather'>
              <p>Current Weather: {forecast.list[0].main.temp}&deg;F</p>
              <p>Feels Like: {forecast.list[0].main.feels_like}&deg;F</p>
              <p>High: {forecast.list[0].main.temp_max}&deg;F</p>
              <p>Low: {forecast.list[0].main.temp_min}&deg;F</p>
            </div>
            <div className='forecast-container'>
            {forecast.list.map(item => (
                <div key={item.dt} className='forecast-items'>
                  <p>{new Date(item.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</p>
                  <p>{item.main.temp}</p>
                  <p>{item.weather[0].main}</p>
                  {/* <p>({item.weather[0].description})</p> */}
              </div>
            ))}
            </div>
          </div>
        ) : (
          <p></p>
        )}

      </div>
    </div>
  );
}

export default App;