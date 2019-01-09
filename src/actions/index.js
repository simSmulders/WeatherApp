import axios from 'axios'

const API_KEY = '630f32fcc318f392b74b84dfddc6522f'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}, nl`
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}