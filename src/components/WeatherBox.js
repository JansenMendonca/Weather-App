import React from 'react';
import './index.css';

const WeatherBox = (props) => {

    return(
        <div className="weather-box">
            <div className="temp">
                {Math.round(props.mainTemp)}
                <sup className="temp-sup">&deg;C</sup>
            </div>
            <div className="weather">
                <img 
                    src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} 
                    alt={props.description}
                />
                <p>{props.description}</p>
            </div>
        </div>
    )
};

export default WeatherBox;

