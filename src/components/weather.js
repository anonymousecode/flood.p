import React, { useState, useEffect } from 'react';
import Styles from '../styles/weather.module.css';

const API_KEY = "1883ab9756a4bfeb543d59343f26ff94";

function Weather() {
  const [city, setCity] = useState("India"); // Displayed current city
  const [inputCity, setInputCity] = useState("India"); // Input box value
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  
  useEffect(() => {
    getCityCoordinates(city);
  }, [city]);

  const getCityCoordinates = async (cityName) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`);
      const data = await response.json();
      if (data.length) {
        const { name, lat, lon } = data[0];
        getWeatherDetails(name, lat, lon);
      } else {
        alert(`No coordinates found for ${cityName}`);
      }
    } catch (error) {
      alert("An error occurred while fetching the coordinates!");
    }
  };

  const getWeatherDetails = async (cityName, lat, lon) => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
      const data = await response.json();
      const uniqueForecastDays = [];
      const fiveDaysForecast = data.list.filter(forecast => {
        const forecastDate = new Date(forecast.dt_txt).getDate();
        if (!uniqueForecastDays.includes(forecastDate)) {
          return uniqueForecastDays.push(forecastDate);
        }
      });
      setWeatherData(fiveDaysForecast[0]);
      setForecastData(fiveDaysForecast.slice(1, 6));
    } catch (error) {
      alert("An error occurred while fetching the weather forecast!");
    }
  };

  const handleSearch = () => {
    setCity(inputCity); // Update `city` only when searching
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        getWeatherDetails(city, latitude, longitude);
      },
      error => {
        if (error.code === error.PERMISSION_DENIED) {
          alert("Geolocation request denied. Please reset location permission to grant access again.");
        }
      }
    );
  };

  return (
    <div className={Styles.container}>
      <div className={Styles['weather-input']}>
        <h3>Enter a City Name</h3>
        <input
          className={Styles['city-input']}
          type="text"
          placeholder="E.g., New York, London, Tokyo"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)} // Update only input value
        />
        <button className={Styles['search-btn']} onClick={handleSearch}>Search</button>
        <div className={Styles.separator}></div>
        <button className={Styles['location-btn']} onClick={handleLocation}>Use Current Location</button>
      </div>

      {weatherData && (
        <div className={Styles['weather-data']}>
          <div className={Styles['current-weather']}>
            <div className={Styles.details}>
              <h2>{city} ({weatherData.dt_txt.split(" ")[0]})</h2>
              <h5>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)} °C</h5>
              <h5>Wind: {weatherData.wind.speed} M/S</h5>
              <h5>Humidity: {weatherData.main.humidity}%</h5>
            </div>
          </div>
          <div className={Styles['days-forecast']}>
            <h2>5-day Forecast</h2>
            <ul className={Styles['weather-cards']}>
              {forecastData.map((weatherItem, index) => (
                <li key={index} className={Styles.card}>
                  <h3>({weatherItem.dt_txt.split(" ")[0]})</h3>
                  <img src={`https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png`} alt="weather-icon" />
                  <h4>Temp: {(weatherItem.main.temp - 273.15).toFixed(2)} °C</h4>
                  <h4>Wind: {weatherItem.wind.speed} M/S</h4>
                  <h4>Humidity: {weatherItem.main.humidity}%</h4>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
