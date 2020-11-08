
## Weather App

This App was built to allow the user search for the real-time weather in any city in the world. It brings as result the 
name of the city and country, the temperature and weather conditions.

## Motivation

The motivation for this project was to start working with React Hooks, and consume a useful and popular API was a good idea.

## Tech/framework used

This App was built with:
- React.js
- React Hooks
- Axios
- OpenweatherMap API
- Jest

## The Code

The Code is divided in the following schema:

###Index.js component
component that renders App.js inside the div with id=root on index.html

**App.js**(inside components folder)
App component is a function component with react hooks, and it does import and run 
SearchBar.js,Location.js and WeatherBox.js components.
SearchBar.js will have 3 props: search passing the search function to the children component,
setQuery, passing the setQuery function from useState hooks, and query passing the		
query term that the user will send through the input element.
Location.js will pass two props, 'name' sending the weather.name, 
and 'country' sending weather.sys.country to the component.
Weatherbox.js will pass three props, 'mainTemp' sending weather.main.temp,
'icon', sending weather.weather[0].icon as the image that will be shown on the
result, and 'description' sending weather.weather[0].description, that will	
be showing description of the weather on the city the user choose.
the Component has a search arrow funch using async/await 
syntax on the search, together with axios. This function
receives an event from the input element, the function 
will be called only when the user clicks on  Enter key.
The if statement here will have 2 conditions, first query cannot be empty,
second the e.key should be equals to 'Enter'.
Confirming the Enter was clicked the input's value will be 
set to the query via setQuery. The openWeatherMap component
then will get the data related to that query from the API and
return as 'data'.
Now the search function will set 'weather' through setWeather.

**SearchBar.js**(inside components folder)
functional component with react hooks useState.It has an input element that will receive the city
for which the user wants to know the weather information provided on this app.

**Location.js**(inside components folder)
functional component that will be receiving the props and will return simple set of divs and
span to return the city and country the user has searched.

**WeatherBox.js**(inside components folder)
Functional component that after receive the props will be returning the 
main temperature rounded up in metrics, also will return the icon related to the conditions
and the description on the exact moment.

**Index.css**(inside components folder)
css file that will be styling the app.

**openWeatherMap.js** (inside api folder)
Function with axios call.


## Installation

Download the zip folder or git clone the https://github.com/JansenMendonca/Weather-App.git, 
then navigate to the directory and just click `npm start`

## API Reference

OpenWeatherMap API is a popular API that provides Current & Forecast weather data collection. Please visit it here: *https://openweathermap.org/api* 

## Tests

### Unit Tests - Jest
Unit tests were written with *jest* for each of the components. The details about it can be found below:
- App.test.js: makes sure the App component renders without crashing;
- Location.test.js: makes sure Location component renders without crashing;
- WeatherBox.test.js: makes sure the Location component renders without crashing;
- SearchBar.test.js: makes sure the SearchBar component renders properly.

To run the unit tests just open the terminal under the project dir, and type `npm test` 

### Manual Tests
Here I would like to suggest some scenarios for manual tests:

**1st scenario**:
***Given***  a user adds New York on the Search element
***and*** the user clicks Enter button
***then*** the app should return:
City Name, Country abreviated;
Temperature in Celsius;
Icon related the weather conditions;
Description text of the weather conditions.

**2nd scenario**:
***Given*** the Search element is empty, only showing Search as placeholder
***and*** the user clicks the Enter button
***then*** no result should be shown ***and*** the App does not break ***and*** the Devtools console should not show any error.










