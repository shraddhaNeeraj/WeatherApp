import React from 'react';
import ReactDOM from 'react-dom';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import DailyWeather from "./DailyWeather";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    //TODO: clean up after tests
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DailyWeather/>, div);
});

it("does not render anything if hourly weather data is not available", () => {
    act(() => {
        render(<DailyWeather/>, container);
    });
    expect(container.textContent).toBe("");
});

it("renders weather summary and icon when hourly weather data is available", () => {
    let hourlyWeather = {
        summary: 'Mock daily summary',
        data: [{}, {}]
    };
    act(() => {
        render(<DailyWeather dailyWeather={hourlyWeather}/>, container);
    });
    let summarySpan = document.createElement("span");
    let iconTag = document.createElement("i");
    summarySpan.textContent = hourlyWeather.summary;
    expect(summarySpan).toBeInTheDOM();
    expect(iconTag).toBeInTheDOM();
    //TODO: Test the child component HourlyWeatherInfo was rendered as many times as the length of hourlyWeather.data is
    //Will need Jest/Enzyme apis to do that easily.
    //expect(wrapper.find(HourlyWeatherInfo).length).to.equal(hourlyWeather.data.length);
});
