
const About = () => {
    return (
        <>
            <div className=" h-screen text-center flex justify-center font-mono p-10 bg-gray-800">
                <div className="text-left">
                    <p className="text-2xl text-white">
                    This app is made with two API's. <br />
                    First API is TrueWay Geocoding from Rapid API. <br />
                    This API uses a name of a city and converts it to GPS coordinates. <br />
                    Second API is WeatherAPI.com also from Rapid API. <br />
                    This API uses the given coordinates and display weather conditions. <br />
                    All of this is made in React. <br /> <br />
                    Made by Mirza Hodžić
                </p>
                </div>
                
            </div>
        </>
    )
}

export default About