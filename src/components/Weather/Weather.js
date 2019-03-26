import React, { Component } from 'react';
import config from '../../config.json';

import './Weather.css';
import WeatherTile from '../WeatherTile/WeatherTile';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WEATHER_API_KEY = "c1d16b8b18a14269d269f0f4e6b614b8";
const TILES_TO_DISPLAY = 3;

function weather_tile(date, low, high, icon) {
        this.date = date;
        this.low = low;
        this.high = high;
        this.icon = icon;
}

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: "",
            temperature: 0,
            city: "Unknown",
            humidity: "Unknown ",
            description: "Unknown ",
            weather_tiles: []
        }
    }

    GetWeatherData(zip, country) {
        //fetch current weather data
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zip + "," + country +"&appid=" + WEATHER_API_KEY)
          .then(res => res.json())
          .then(
              (response) => {
                  this.setState({
                      temperature: response.main.temp,
                      city: response.name,
                      humidity: response.main.humidity,
                      description: response.weather[0].description,
                      icon_id: response.weather[0].id,
                      error: ""
                  });
              },
              (err) => {
                  this.setState({
                      error: err
                  });
              }
          );
        //fetch 7 day forecast data
        fetch("https://api.openweathermap.org/data/2.5/forecast?zip=" + zip + "," + country +"&appid=" + WEATHER_API_KEY)
            .then(res => res.json())
            .then(
                (response) => {
                    let wt = [];
                    for (var i = 0; i < TILES_TO_DISPLAY; i++) {
                        var morn = response.list[i*8 + 2];
                        var noon = response.list[i*8 + 4];
                        var eve = response.list[i*8 + 6];
                        wt[i] = new weather_tile(noon.dt_txt, morn.main.temp_min, eve.main.temp_max, noon.weather[0].id);
                    }
                    this.setState({
                        weather_tiles: wt
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
                return temp.toFixed(0);
            case "°F":
                return ((temp - 273.15) * (9/5) + (32)).toFixed(0);
            case "°C":
                return (temp - 273.15).toFixed(0);
            default:
                return "Invalid Temperature Mode";
        }
    }

    //setup timer for self-updating
    componentDidMount() {
        //call once then wait
        this.GetWeatherData(this.props.zip, this.props.country);
        this.timerID = setInterval(
            () => this.tick(),
            1000 * 60 * 10  //10 minutes
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    //self-update function
    tick() {
        this.GetWeatherData(this.props.zip, this.props.country);
    }

    render() {
        const {error, temperature, city, humidity, description, icon_id} = this.state;
        const {country} = this.props;
        const {weather_tiles} = this.state;
        const temp_mode = this.TempMode();
        if (error) {
            return "Error";
        }
        return (
            <div className="weather-container">
                <div className="weather-attrib-container">
                    <div className="weather-attrib" id="temperature">
                        {this.parse_temp(temperature)}{temp_mode}
                    </div>
                    <div className="weather-attrib" id="icon">
                        <WeatherIcon icon={icon_id} />
                    </div>
                    <div className="weather-attrib" id="details">
                        Humidity: {humidity}% ----- {description}
                        <br />
                        {city}, {country}
                    </div>
                </div>
                <div className="weather-tiles-container">
                    {this.mapWeatherTiles(weather_tiles)}
                </div>
            </div>
        );
    }

    mapWeatherTiles(weather_tiles) {
        return weather_tiles.map((tile, id) => (
            <WeatherTile key={id} date={tile.date} low={tile.low} high={tile.high} icon={tile.icon} />
        ));
    }
}

export default Weather;