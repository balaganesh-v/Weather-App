import React, { useState } from 'react';
import { TiWeatherShower } from 'react-icons/ti';
import { WEATHER_API_KEY } from '../config'; // import API key

const Weather = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);

    const getWeather = async () => {
        if (!city.trim()) {
            alert("Please enter a city name!");
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}&aqi=no`);
            const data = await response.json();

            if (data.error) {
                alert(data.error.message);
                setWeather(null);
            } else {
                setWeather(data);
            }
        } catch (error) {
            console.error("Error fetching weather data:", error);
            alert("Failed to fetch weather data. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333', marginTop: '50px' }}>
            <h1><TiWeatherShower /> Weather Predictions</h1>
            <label>
                Enter City: <input 
                    type="text" 
                    placeholder="City Name" 
                    value={city} 
                    onChange={(e) => setCity(e.target.value)} 
                />
            </label>
            <button onClick={getWeather} style={{ marginLeft: '10px', padding: '5px 10px', cursor: 'pointer' }}>
                Get Weather
            </button>

            {loading && <p>Loading...</p>}

            {weather && !loading && (
                <div style={{ marginTop: '20px' }}>
                    <h2>{weather.location.name}, {weather.location.country}</h2>
                    <p>🌡 {weather.current.temp_c}°C</p>
                    <p>💧 Humidity: {weather.current.humidity}%</p>
                    <p>🌍 Condition: {weather.current.condition.text}</p>
                    <img src={weather.current.condition.icon} alt="Weather Icon" />
                </div>
            )}
        </div>
    )
}

export default Weather;
