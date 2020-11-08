import React,{useState} from 'react';
import './index.css';
import {openWeatherMap} from '../api/openWeatherMap'; 
import SearchBar from './SearchBar';
import Location from './Location';
import WeatherBox from './WeatherBox';


const App = () => {

    const[query, setQuery] = useState('');
    const[weather, setWeather] = useState({});
    

    const search = async(e) => {
        if(query && e.key === 'Enter'){
            const data = await openWeatherMap(query)
            setWeather(data);
            setQuery('');            
        } 
    }

    return(        
        <div className="app">
            <main>
                <div className="search-box">
                    <SearchBar search={search} setQuery={setQuery} query={query} />                   
                    {weather.main && (
                      <div>
                        <Location  
                            name={weather.name} 
                            country={weather.sys.country}                        
                        />
                        <WeatherBox 
                            mainTemp={weather.main.temp}
                            icon={weather.weather[0].icon}
                            description={weather.weather[0].description}
                        /> 
                      </div>  
                    )}
                </div>                
            </main>                
        </div>
    )
 
}

export default App;