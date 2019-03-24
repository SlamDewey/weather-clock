import React, { Component } from 'react';
import config from '../../config.json';

const WEATHER_API_KEY = "c1d16b8b18a14269d269f0f4e6b614b8";

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: "",
            temperature: 0,
            temp_min: 0,
            temp_max: 0,
            city: "",
            humidity: "",
            description: "",
        }
    }

    GetWeatherData(zip, country) {
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + country
              +"&appid=" + WEATHER_API_KEY)
          .then(res => res.json())
          .then(
            (response) => {
              this.setState({
                temperature: response.main.temp,
                temp_min: response.main.temp_min,
                temp_max: response.main.temp_max,
                city: response.name,
                humidity: response.main.humidity,
                description: response.weather[0].description,
                error: ""
              });
            },
            (err) => {
              this.setState({
                error: err
              });
            }
          );
      }

    TempMode() {
        return config.WeatherSettings.SelectedMode;
    }

    parse_temp(temp) {
        const temp_mode = this.TempMode();
        switch(temp_mode) {
            case "K":
                return temp;
            case "F":
                return ((temp - 273.15) * (9/5) + (32)).toFixed(2);
            case "C":
                return (temp - 273.15).toFixed(2);
            default:
                return "Invalid Temperature Mode";
        }
    }

    render() {
        const {error, temperature, temp_min, temp_max, city, humidity, description} = this.state;
        const {zip, country} = this.props;
        const temp_mode = this.TempMode();
        return (
            <div className="weather-container">
                <div onClick={() => this.GetWeatherData(zip, country)}><h1>TEST</h1></div>
                <div className="weather-attrib" id="error">
                    {error}
                </div>
                <div className="weather-attrib" id="temperature">
                    {this.parse_temp(temp_min)}{temp_mode} -> {this.parse_temp(temperature)}{temp_mode} -> {this.parse_temp(temp_max)}{temp_mode}
                </div>
                <div className="weather-attrib" id="description">
                    {description}
                </div>
                <div className="weather-attrib" id="humidity">
                    Humidity: {humidity}%
                </div>
                <div className="weather-attrib" id="location">
                    {city}, {country}
                </div>
            </div>
        );
    }
}

export default Weather;