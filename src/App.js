import React from 'react';
import './App.css';
import Weather from './weather_react';

function App() {
  return (
    <div className="App">
      
        <h1>
          Weather App with React
        </h1>
        <Weather />
        <span>
        This project was coded by <a href="https://github.com/Novemberman90">Olena Stratiuk</a>
        and is <a href="https://github.com/Novemberman90/search_engien_weather_react"> open-sourced on GitHub</a>
        and 
        <a href="https://keen-pegasus-9f865e.netlify.app/">hosted om Netlify</a>
        </span>
        
    </div>
  );
}

export default App;
