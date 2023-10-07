// going to be used to split functions into seperate components


// import { useState } from 'react';

// const Search = () => {

//   const api = {
//     key: `${process.env.REACT_APP_API_KEY}`,
//     base: "https://api.openweathermap.org/data/2.5/",
//   };

//   const [search, setSearch] = useState("");
//   const [weather, setWeather] = useState({});

//   const searchPressed = () => {
//     fetch(`${api.base}weather?q=${search}&units=imperial&APPID=${api.key}`)
//       .then(res => res.json())
//       .then((result) => {
//         setWeather(result);
//       });
//   };

//   return (
//     <div className='input-box'>
//       <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
//       <button onClick={searchPressed}>Search</button>
//     </div>
//   );
// }

// export default Search;