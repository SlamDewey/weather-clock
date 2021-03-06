import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import config from '../../config.json';

import './Weather.css';
import WeatherTile from '../WeatherTile/WeatherTile';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

const WEATHER_API_KEY = "c1d16b8b18a14269d269f0f4e6b614b8";
const TILES_TO_DISPLAY = 3;

function weather_tile(date, morn, noon, eve, icon) {
        this.date = date;
        this.morn = morn;
        this.noon = noon;
        this.eve = eve;
        this.icon = icon;
}

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: "",
            temperature: 0,
            city: "Unknown",
            country: "Unknown",
            humidity: "Unknown ",
            description: "Unknown ",
            weather_tiles: []
        }
    }

    GetWeatherData(lat, lon) {
        //fetch current weather data
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +"&appid=" + WEATHER_API_KEY)
          .then(res => res.json())
          .then(
              (response) => {
                  this.setState({
                      temperature: response.main.temp,
                      city: response.name,
                      country: response.sys.country,
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
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon +"&appid=" + WEATHER_API_KEY)
            .then(res => res.json())
            .then(
                (response) => {
                    let wt = [];
                    for (var i = 0; i < TILES_TO_DISPLAY; i++) {
                        var morn = response.list[i*8 + 4];
                        var noon = response.list[i*8 + 6];
                        var eve = response.list[i*8 + 8];
                        wt[i] = new weather_tile(noon.dt_txt, morn.main.temp, noon.main.temp, eve.main.temp, noon.weather[0].id);
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
        const cookies = new Cookies();
        var temp_mode = cookies.get("temp_mode");
        return (!temp_mode) ? config.WeatherSettings.DefaultMode : temp_mode;
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
        this.GetWeatherData(this.props.lat, this.props.lon);
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
        this.GetWeatherData(this.props.lat, this.props.lon);
    }

    render() {
        const {error, temperature, city, humidity, description, icon_id} = this.state;
        const {country} = this.state;
        const {weather_tiles} = this.state;
        const temp_mode = this.TempMode();
        if (error) {
            alert("Error Getting Weather Data!");
            console.log(error);
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
            <WeatherTile key={id} date={tile.date} morn={tile.morn} noon={tile.noon} eve={tile.eve} icon={tile.icon} dn={"d"} />
        ));
    }
}

export default Weather;