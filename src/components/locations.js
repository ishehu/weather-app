const key = "aOsBHyQvSHxPd9wsZZIZKW8HADHivovt";

const getCity = async (city) => {
  const baseURL =
    "https://dataservice.accuweather.com/locations/v1/cities/search";
  const queryParams = `?apikey=${key}&q=${city}`;

  const response = await fetch(baseURL + queryParams);
  const data = await response.json();
  return data[0];
};

export default getCity;
