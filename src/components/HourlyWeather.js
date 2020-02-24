import React, {Component} from "react";
import iconMappings from "./icons";
import HourlyWeatherInfo from "./HourlyWeatherInfo";

class HourlyWeather extends Component {

    createHourlyWeatherList = () => {
        let list = [];
        for (let i = 0; i < this.props.hourlyWeather['data'].length; i++) {
            list.push(<HourlyWeatherInfo key={Math.random().toString()} weatherInfo={this.props.hourlyWeather.data[i]}></HourlyWeatherInfo>)
        }
        return list;
    };

    render() {
        const renderWeather = ()=> {
            if(this.props.hourlyWeather)  {
                let icon = this.props.hourlyWeather['icon'];

                return <div>
                    <p><span>{this.props.hourlyWeather['summary']}</span>  <i className={`wi ${iconMappings[icon]}`}></i></p>
                    {this.createHourlyWeatherList()}
                </div>
            }
        };
        return (
            <div>
                {renderWeather()}
            </div>
        );
    }
}

export default HourlyWeather;
