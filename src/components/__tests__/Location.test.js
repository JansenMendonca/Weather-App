import React from 'react';
import ReactDOM from 'react-dom';
import Location from '../Location';


it("should render Location component without crashing",()=>{
    const div = document.createElement("div");
    ReactDOM.render(
        <Location  
            name="New York" 
            country="US"                        
        />, div
    );
})