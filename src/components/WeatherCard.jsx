import { useState, useEffect } from "react";
import favouriteImg from "../icons/favourite.png"
import getWeather from "../services/getWeather";

const WeatherCard = ({ cityCoordinates, city, temperature, wind, humidity, feelsLike }) => {
    const [weather, setWeather] = useState(null)

    const getCityCoordinates = async () => {
       
        try {
            const response = await getWeather(cityCoordinates);
        
            setWeather(response)
        }catch(error)
        {
            console.log(error);
        }
    }

    useEffect(() => {
        getCityCoordinates();
    }, [cityCoordinates]);

    if (weather) {
        return (
        <div className="h-max bg-blue-800 rounded-md pl-5 pr-5 font-mono max-w-[400px]">
            <div className="p-3 border-b border-current text-center text-white">
                    <h1 className="text-center text-2xl p-2">{weather.location.name}, {weather.location.country }</h1>
                <ul>
                    <li>Temp: { weather.current.temp_c } ℃</li>
                    <li>Wind: { weather.current.wind_kph } km/h</li>
                    <li>Humidity: { weather.current.humidity } %</li>
                    <li>Feels Like: { weather.current.feelslike_c } ℃</li>
                </ul>
            </div>
          
                <div className="text-center p-3">
                    <h2 className="text-white">Condition:</h2>
                <img className="w-20 m-auto" src={weather.current.condition.icon} />
            </div>
        </div>
    )
    } else {
        return null
    }

    
}

export default WeatherCard