export function getWeatherFor(zipcode)  {
    let promise = new Promise();
    fetch('')
        .then( (weatherData) => {
           promise.resolve(weatherData);
        } );
};
