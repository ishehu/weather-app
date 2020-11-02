const key = "aOsBHyQvSHxPd9wsZZIZKW8HADHivovt";

const getWeather = async (id) => {
  const baseURL = "https://dataservice.accuweather.com/currentconditions/v1/";
  const queryParams = `${id}?apikey=${key}`;

  const response = await fetch(baseURL + queryParams);
  const data = await response.json();
  return data[0];
};

export default getWeather;
