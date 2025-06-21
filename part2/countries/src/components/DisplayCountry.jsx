import { useEffect, useState } from "react";
import weatherService from "../services/weather";

const DisplayCountry = ({ country }) => {
  const [currentWeather, setCurrentWeather] = useState(null);

  useEffect(() => {
    const capital = country.capital[0];
    if (capital) {
      weatherService.getWeather(capital).then((weatherData) => {
        setCurrentWeather(weatherData);
      });
    }
  }, [country]);

  return (
    <div>
      <div>
        <h1> {country.name.official}</h1>
        <p>
          <b>Capital:</b> {country.capital}
        </p>
        <p>
          <b>Area:</b> {country.area}
        </p>
        <p>
          <b>Population:</b> {country.population}
        </p>
        <p>
          <b>Languages:</b>
        </p>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img
          src={country.flags.png}
          alt={`Flag of ${country.name.official}`}
          style={{ width: "150px", border: "1px solid grey" }}
        />
      </div>
      {currentWeather ? (
        <div>
          <h2>Weather in {country.capital}</h2>
          <p>
            <b>Temperature:</b> {currentWeather.current.temp_c} °C
          </p>
          <p>{currentWeather.current.condition.text}</p>
          <img
            src={currentWeather.current.condition.icon}
            alt={`Weather in ${country.capital[0]}`}
            style={{ width: "100px" }}
          />
          <p>
            <b>Wind:</b> {currentWeather.current.wind_kph} kph
          </p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default DisplayCountry;
