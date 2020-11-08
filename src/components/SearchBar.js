import React from 'react';

const SearchBar =(props) =>{
    return(
        <input 
            type="text" 
            placeholder="Search..." 
            className="search-bar" 
            value={props.query} 
            onChange={(e) => props.setQuery(e.target.value)} 
            onKeyPress={props.search} 
        />
    )
}

export default SearchBar;