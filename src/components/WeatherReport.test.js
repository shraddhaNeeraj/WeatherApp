import ReactDOM from 'react-dom';
import WeatherReport from "./WeatherReport";
import React from 'react';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherReport/>, div);
});


