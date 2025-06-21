import axios from 'axios'

const api_key = import.meta.env.VITE_WEATHER_API_KEY

const baseUrl = 'http://api.weatherapi.com/v1'

const getWeather = (city) =>{
    const request = axios.get(`${baseUrl}/current.json?key=${api_key}&q=${encodeURIComponent(city)}&aqi=no`)
    return request.then(response => response.data)
}

export default { getWeather }