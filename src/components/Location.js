import React from 'react';
import './index.css';

const Location = (props) => {

    return(
        <div className="location-box">
            <span className="location">{props.name},{props.country}</span>
        </div>
    )
};

export default Location;