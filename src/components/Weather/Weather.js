import React, { Component } from 'react';
import config from '../../config.json';

import './Weather.css';

const WEATHER_API_KEY = "c1d16b8b18a14269d269f0f4e6b614b8";

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: "",
            temperature: 0,
            city: "Unknown",
            humidity: "Unknown ",
            description: "Unknown ",
            list: []
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
        fetch("api.openweathermap.org/data/2.5/forecast/daily?zip=" + zip + "," + country +"&appid=" + WEATHER_API_KEY)
      }

    TempMode() {
        return config.WeatherSettings.SelectedMode;
    }

    parse_temp(temp) {
        const temp_mode = this.TempMode();
        switch(temp_mode) {
            case "K":
                return temp;
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
        const temp_mode = this.TempMode();
        if (error) {
            return "Error";
        }
        return (
            <div className="weather-container">
                <div className="weather-attrib-container">
                    <div className="weather-attrib" id="conditions">
                        <div id="large-font">{this.parse_temp(temperature)}{temp_mode}</div>
                    </div>
                    <div className="weather-attrib" id="icon">
                        {this.getWeatherImage(icon_id)}
                    </div>
                    <div className="weather-attrib" id="details">
                        Humidity: {humidity}% ----- {description}
                    </div>
                    <br />
                    <div className="weather-attrib" id="location">
                        {city}, {country}
                    </div>
                </div>
            </div>
        );
    }

    MakeImgComponent(url, alt, width, height) {
        if (!width || !height) width = height = '100%';
        return (
            <div className="weather-icon">
                <img src={url} alt={alt} width={width} height={height} />
            </div>
        );
    }
    
    //map API icon_id to local image files for weather visualization
    getWeatherImage(icon_id) {
        var hours = (new Date()).getHours();
        var dn = (hours < 20 && hours > 5)? "d" : "n";
        if (icon_id < 233) {    //200-232
            return this.MakeImgComponent("weather_img/200-232.svg");
        } else if (icon_id < 322) { //300-321
            if (icon_id === 300)
                return this.MakeImgComponent("weather_img/300" + dn + ".svg");
            else if (icon_id === 301)
                return this.MakeImgComponent("weather_img/301.svg");
            else if (icon_id === 314 || icon_id === 321)
                return this.MakeImgComponent("weather_img/314 321.svg");
            else return this.MakeImgComponent("weather_img/302 310 311 312 313.svg");
        } else if (icon_id < 532) { //500-531
            if (icon_id === 500)
                return this.MakeImgComponent("weather_img/500" + dn + ".svg");
            else if (icon_id === 501)
                return this.MakeImgComponent("weather_img/501.svg");
            else if (icon_id === 502 || icon_id === 531)
                return this.MakeImgComponent("weather_img/502 531.svg");
            else if (icon_id === 503 || icon_id === 504 || icon_id === 522)
                return this.MakeImgComponent("weather_img/503 504 522.svg");
            else if (icon_id === 511)
                return this.MakeImgComponent("weather_img/511.svg");
            else if (icon_id === 520 || icon_id === 521)
                return this.MakeImgComponent("weather_img/520 521.svg");
        } else if (icon_id < 623) { //600-622
            if (icon_id === 600)
                return this.MakeImgComponent("weather_img/600" + dn + ".svg");
            else if (icon_id === 601 || icon_id === 602)
                return this.MakeImgComponent("weather_img/601 602.svg");
            else if (icon_id === 611 || icon_id === 615 || icon_id === 616 || icon_id === 620)
                return this.MakeImgComponent("weather_img/611 615 616 620.svg");
            else if (icon_id === 612 || icon_id === 613)
                return this.MakeImgComponent("weather_img/612 613" + dn + ".svg");
            else if (icon_id === 621 || icon_id === 622)
                return this.MakeImgComponent("weather_img/621 622.svg");
            else if (icon_id === 520 || icon_id === 521)
                return this.MakeImgComponent("weather_img/520 521.svg");
        } else if (icon_id < 782) { //701-781
            if (icon_id === 701 || icon_id === 711 || icon_id === 731 || icon_id === 751 || icon_id === 761 || icon_id === 762)
                return this.MakeImgComponent("weather_img/701 711 731 751 761 762.svg");
            else if (icon_id === 721)
                return this.MakeImgComponent("weather_img/721.svg");
            else if (icon_id === 741)
                return this.MakeImgComponent("weather_img/741.svg");
            else if (icon_id === 771)
                return this.MakeImgComponent("weather_img/771.svg");
            else if (icon_id === 781)
                return this.MakeImgComponent("weather_img/781.svg");
        } else if (icon_id < 805) { //800-804
            if (icon_id === 800)
                return this.MakeImgComponent("weather_img/800" + dn + ".svg");
            else if (icon_id === 801 || icon_id === 802)
                return this.MakeImgComponent("weather_img/801 802" + dn + ".svg");
            else if (icon_id === 803 || icon_id === 804)
                return this.MakeImgComponent("weather_img/803 804.svg");
        }
        else return null;
    }
}

export default Weather;