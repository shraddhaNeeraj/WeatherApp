import React, {Component} from "react";
import iconMappings from "./icons";

class HourlyWeatherInfo extends Component {

    createWeatherList = () => {

            let unix_timestamp = this.props.weatherInfo['time'];
            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var date = new Date(unix_timestamp * 1000);
            // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            var seconds = "0" + date.getSeconds();

            var formattedTime = hours + ':' + minutes.substr(-2);

            var dom = (<div role="alert" className={`fade alert alert-info show`} key={Math.random().toString()} style={{display: "flex"}}>
                <div style={{flexGrow: 2, flexShrink: 0, flexBasis:0}}>{formattedTime}</div>
                <div style={{flexGrow: 2, flexShrink: 0, flexBasis:0}}><span>{this.props.weatherInfo['temperature']}</span><sup>o</sup>C</div>
                <div style={{flexGrow: 2, flexShrink: 0, flexBasis:0}}>{this.props.weatherInfo['summary']}</div>
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

export default HourlyWeatherInfo;
