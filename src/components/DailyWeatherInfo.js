import React, {Component} from "react";
import iconMappings from "./icons";

class DailyWeatherInfo extends Component {

    createWeatherList = () => {
            let unix_timestamp = this.props.weatherInfo['time'];
            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var dateObject = new Date(unix_timestamp * 1000);

            var dom =(<div role="alert" className={`fade alert alert-info show`} key={Math.random().toString()} style={{display: "flex"}}>
                <div style={{flexGrow: 2, flexShrink: 0, flexBasis:0, textAlign: 'center'}}>{dateObject.toLocaleDateString()}</div>
                <div style={{flexGrow: 2, flexShrink: 0, flexBasis:0, textAlign: 'center'}}><i className={`wi ${iconMappings[this.props.weatherInfo['icon']]}`}></i></div>
                <div style={{flexGrow: 2, flexShrink: 0, flexBasis:0, textAlign: 'center'}}><span>{this.props.weatherInfo['temperatureMin']}</span><sup>o</sup>C / <span>{this.props.weatherInfo['temperatureMax']}</span><sup>o</sup>C</div>
                <div style={{flexGrow: 2, flexShrink: 0, flexBasis:0, textAlign: 'center'}}>{this.props.weatherInfo['summary']}</div>
                <div style={{flexGrow: 2, flexShrink: 0, flexBasis:0, textAlign: 'center'}}>
                    <p>Precipitation:</p>
                    <span>{this.props.weatherInfo['precipType']}</span>
                </div>
                <div style={{flexGrow: 2, flexShrink: 0, flexBasis:0, textAlign: 'center'}}>
                    <p>Humidity:</p>
                    {this.props.weatherInfo['humidity']}
                </div>
            </div>)

        return dom;
    };

    render() {
        return (
            <div>
                {this.createWeatherList()}
            </div>
        );
    }
}

export default DailyWeatherInfo;
