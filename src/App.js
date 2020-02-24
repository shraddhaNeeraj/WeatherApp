import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'weather-icons/css/weather-icons.css'
import WeatherReport from "./components/WeatherReport";

class App extends Component {
  render() {
    return (
          <div className="container">
            <h1 className="text-center">Weather App</h1>
              <WeatherReport></WeatherReport>
          </div>
    );
  }
}

export default App;
