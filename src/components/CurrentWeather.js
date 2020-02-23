import React, {Component} from "react";
import HourlyWeatherInfo from "./HourlyWeatherInfo";
import iconMappings from "./icons";

class CurrentWeather extends Component {
    render() {
        let icon = this.props.dailyWeather['icon'];
        return (
            <div>
                <h3>this.props.dailyWeather['summary']</h3>
                <i className={`wi ${iconMappings[icon]}`}></i>
                {this.props.currentWeather['data'].forEach(weatherInfo => (
                    <HourlyWeatherInfo weatherInfo={weatherInfo}></HourlyWeatherInfo>
                ))
                }
            </div>
        );
    }
}

export default CurrentWeather;
