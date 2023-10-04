import WeatherCard from "./WeatherCard"
import { useState } from "react";
import getCoordinates from "../services/getCoordinates";

const Main = () => {
    const [city, setCity] = useState("")
    const [cooridnates, setCoordinates] = useState("")
    const [error, setError] = useState("")

    const getCityCoordinates = async e => {
        e.preventDefault();

        try {
            const cityCoordinates = await getCoordinates(city);

            setCoordinates(cityCoordinates.location);   
        }catch(error)
        {
            setError(error)
        }

    }

    return (
        <div className=" pl-12 pr-12 pt-10 h-screen bg-violet-900 gap-32">
            <div className="text-center text-2xl pb-28">
                <ul className=" sm: ml-12">
                    <li className="ml-[-60px]">
                        <form onSubmit={getCityCoordinates}>
                            <input type="search" name="city-search" autoComplete="off" id="city-serach"
                            placeholder="Search for a city" onChange={(e) => setCity(e.target.value)}
                                className="bg-blue-800 rounded-xl border-none outline-none flex-1 text-white p-4" />
                            <button className="p-2 mt-4 ml-6 rounded-lg bg-yellow-500">Search</button>
                        </form>
                        
                    </li>
                </ul>
            </div>
            <div className="flex justify-center">
                <div >
        
                <WeatherCard cityCoordinates={cooridnates}/>
                
            </div>
            </div>
        </div>
    )
}

export default Main