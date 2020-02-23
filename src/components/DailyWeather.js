import React, {Component} from "react";
import iconMappings from "./icons";
import DailyWeatherInfo from "./DailyWeatherInfo";

class DailyWeather extends Component {

    createDailyWeatherList = () => {
        let list = [];
        for (let i = 0; i < this.props.dailyWeather['data'].length; i++) {
            list.push(<DailyWeatherInfo key={Math.random().toString()} weatherInfo={this.props.dailyWeather.data[i]}></DailyWeatherInfo>)
        }
        return list;
    };

    render() {
        const renderWeather = ()=>{
            if(this.props.dailyWeather)  {
                let icon = this.props.dailyWeather['icon'];

                return <div>
                <p>{this.props.dailyWeather['summary']}  <i className={`wi ${iconMappings[icon]}`}></i></p>
                {this.createDailyWeatherList()}
            </div> }
        };


        return (
            <div>
                {renderWeather()}
            </div>
        );
    }
}

export default DailyWeather;
