import React from 'react';
import ReactDOM from 'react-dom';
import HourlyWeather from "./HourlyWeather";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Alerts from "./Alerts";

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
    ReactDOM.render(<HourlyWeather/>, div);
});

it("renders title and description for each alert from the 'alerts' property", () => {
    let alerts = [
        {
            title: 'Alert 1',
            description: 'Tornado alert'
        },
        {
            title: 'Alert 2',
            description: 'Snow storm alert'
        }
    ];
    act(() => {
        render(<Alerts alerts={alerts}/>, container);
    });
    let cardTextTag1 = document.createElement("Card.Text");
    cardTextTag1.textContent = alerts[0].title;
    let cardTitleTag1 = document.createElement("Card.Title");
    cardTitleTag1.textContent = alerts[0].description;
    let cardTextTag2 = document.createElement("Card.Text");
    cardTextTag2.textContent = alerts[1].title;
    let cardTitleTag2 = document.createElement("Card.Title");
    cardTitleTag2.textContent = alerts[1].description;

    expect(cardTitleTag1).toBeInTheDOM();
    expect(cardTitleTag2).toBeInTheDOM();
});
