import axios from "axios";

const getWeather = async (cityCoordinates) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/current.json",
    params: { q: `${cityCoordinates.lat},${cityCoordinates.lng}` },
    headers: {
      "X-RapidAPI-Key": "99cd3bc545mshc6ed8f4d192981bp127399jsnc1e397595532",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const weather = response?.data;

    if (weather) return weather;
  } catch (error) {
    console.error(error);
  }
};

export default getWeather;
