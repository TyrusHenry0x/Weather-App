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
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  
  return (
    <div className="App">
      <h1>GYATTT</h1> 
      <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
      <button onClick={searchPressed}>Search</button>
    </div>
  );
}

export default App;
