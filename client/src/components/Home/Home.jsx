// import React from 'react';
// import { useState } from 'react';

// const Home = ({ setSearch, searchPressed, weather }) => {
//   return (
//     <div className="App">
//       <h1>Weather App</h1> 
//       <div className='input-box'>
//         <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)}/>
//         <button onClick={searchPressed}>Search</button>
//       </div>
//       {/* <Search/> */}

//       {/* result container held by terinary operator(preventing undefined error) */}
//       {typeof weather.main !== "undefined" ? (
//       <div className='result-container'>
//         <p>{weather.name}</p>
//         <p>{weather.main.temp}</p>
//         <p>{weather.weather[0].main}</p>
//         <p>({weather.weather[0].description})</p>  
//       </div>
//       ) : ("")}
//     </div>
//   )
// }

// export default Home;