import React from 'react'

const Weather = () => {
    const temp = 26 ;
    
    return (
        <div>
            <h1>Weather Predictions</h1>
            <h2>Temperature: {temp}°C</h2>
            {temp > 25 ? <p>It's a hot day</p> : <p>It's a cold day</p>}
        </div>
    )
}

export default Weather