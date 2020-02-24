import React, { Component} from 'react';
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import DailyWeather from "./DailyWeather";
import HourlyWeather from "./HourlyWeather";
import Alerts from "./Alerts";
import TranslationService from "../services/WeatherReportService";

const DarkSkyKey = 'a1f574bebef94cd1267907386247a5e7';
const ZipCodeAPIKey = 'js-XUto08W0lTnwXGrDFJbZcC4suIqYVMcr64OAE0MDD62pUB8zN6dDKXSD2Tlghwza';

class WeatherReport extends Component {
    state = {
        zipcode: null,
        location: {
            city: null,
            state: null,
            lat: null,
            lng: null,
            icon: ''
        },
        currentWeatherInfo: null,
        dailyWeatherInfo: null,
        hourlyWeatherInfo: null,
        alerts: null
    };

    componentDidMount() {
        //TODO: Use setTimeout to call populateWeatherInfo in the case when zipcode is not null, at regular intervals to fetch latest weather updates.
    }

    getLocationDetails() {
        var that = this;

        var obtainZipcodeDeferred = new $.Deferred();
        $.ajax({
            "url": `https://www.zipcodeapi.com/rest/${ZipCodeAPIKey}/info.json/${this.state.zipcode}/degrees`,
            "dataType": "json"
        }).done(function(locationDetails) {
            obtainZipcodeDeferred.resolve(locationDetails);
        });
        return obtainZipcodeDeferred.promise();
    }

    getWeather(locationDetails) {
        var that = this;
        var currentUnixTimeStamp = Math.floor(Date.now() / 1000);
        $.ajax({
            "url": `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${DarkSkyKey}/${locationDetails.lat},${locationDetails.lng},${currentUnixTimeStamp}`
        }).done(function (weatherData) {
            let currentState = {...that.state};
            currentState = TranslationService.populateState(currentState, weatherData, locationDetails);
            that.setState({
                ...currentState
            });
            that.forceUpdate();
        });
    }

    populateWeatherInfo() {
        var that = this;
        this.getLocationDetails().then( (locationDetails) => {
            that.getWeather(locationDetails);
        });
    }

    async updateZipCode(event) {
        await this.setState({zipcode: event.target.value});
        this.populateWeatherInfo();
    }

    render() {
        const renderDailyWeather = ()=>{
            if(this.state.dailyWeatherInfo)  {return <DailyWeather dailyWeather={this.state.dailyWeatherInfo}></DailyWeather> }
        };
        const renderHourlyWeather = () => {
            if(this.state.hourlyWeatherInfo)  {return <HourlyWeather hourlyWeather={this.state.hourlyWeatherInfo}></HourlyWeather> }
        };
        const renderAlerts = () => {
            if(this.state.alerts)  {return <Alerts alerts={this.state.alerts}></Alerts> }
        };
        const updateZipCode = (event) => {
            this.state.location.zipcode = event.target.value;
        };
        return (
            <div>
                <div className="text-center"><input onBlur={this.updateZipCode.bind(this)} placeholder="Enter Zipcode..."></input></div>
                <h2 className="text-center">{this.state.location.city}, {this.state.location.state}</h2>
                <h3 className="text-center">{this.state.currentWeather}</h3>
                <p className="text-center">{this.state.currentSummary}</p>
                <p className="text-center"><i style={{fontSize: "5rem"}} className={`wi ${this.state.icon}`}></i></p>

                <Tabs defaultActiveKey="hourly" id="weather-tabs">
                    <Tab eventKey="hourly" title="Hourly">
                        { renderHourlyWeather() }
                    </Tab>
                    <Tab eventKey="daily" title="Daily">
                        { renderDailyWeather() }
                    </Tab>
                </Tabs>
                {renderAlerts()}
            </div>
        );
    }
}

export default WeatherReport;
