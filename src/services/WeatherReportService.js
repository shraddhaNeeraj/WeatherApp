import iconMappings from "../components/icons";

const TranslationService = {

    populateState: function(state, weatherData, locationDetails) {
        state.location.city = locationDetails.city;
        state.location.state = locationDetails.state;
        state.temp = weatherData.currently.apparentTemperature;
        state.currentWeather = weatherData.currently.summary;
        state.currentWeatherInfo = weatherData.currently;
        state.currentSummary = weatherData.hourly.summary;
        state.alerts = weatherData.alerts;
        state.dailyWeatherInfo = weatherData.daily;
        state.hourlyWeatherInfo = weatherData.hourly;
        state.icon = iconMappings[weatherData.currently.icon];
        return state;
    }
};

export default TranslationService;
