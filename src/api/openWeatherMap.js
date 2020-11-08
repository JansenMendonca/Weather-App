import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_Key = '4341afc5f7a46e185007999f5712a30b';

export const openWeatherMap = async (query) =>{
    const {data} = await axios.get(URL,{
        params:{
            q: query,
            units: 'metric',
            APPID: API_Key,
        }
    });

    return data;

}

