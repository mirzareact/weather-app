import axios from "axios";

const getCoordinates = async (city) => {
  const options = {
    method: "GET",
    url: "https://trueway-geocoding.p.rapidapi.com/Geocode",
    params: {
      address: city,
      language: "en",
    },
    headers: {
      "X-RapidAPI-Key": "99cd3bc545mshc6ed8f4d192981bp127399jsnc1e397595532",
      "X-RapidAPI-Host": "trueway-geocoding.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const data = response?.data?.results[0];

    if (data) return data;
  } catch (error) {
    console.log(error);
  }
};

export default getCoordinates;
