import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from '../SearchBar';
import  "@testing-library/jest-dom";



    it("should render SearchBar properly ", ()=>{
        const div = document.createElement("div");
        ReactDOM.render(
            <SearchBar 
                search={SearchBar.search} 
                setQuery={SearchBar.setQuery} 
                query={'New York'} 
            /> , div
        );     
       
    })

