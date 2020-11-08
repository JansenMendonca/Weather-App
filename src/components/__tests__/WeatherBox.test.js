import React from 'react';
import ReactDOM from 'react-dom';
import WeatherBox from '../WeatherBox';


it("should render Location component without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(
        <WeatherBox 
            mainTemp="Clear"
            icon="01d"
            description="clear sky"
        /> , div
    );
})