import React, {Component} from 'react';
import Cookies from 'universal-cookie';

import config from '../../config.json';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import './WeatherTile.css';

class WeatherTile extends Component {

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
    parse_date(date) {
        var d = new Date(date);
        return (d.getMonth() + 1) + "/" + (d.getDate()) + "/" + (d.getFullYear());
    }
    render() {
        const {date, high, low, icon, dn} = this.props;
        return (
            <div className="weather-tile">
                <div className="date">
                    {this.parse_date(date)}
                </div>
                <div className="temp">
                    <div className="small-temp-text">
                        Lo: {this.parse_temp(low)} {this.TempMode()}
                        <br />
                        Hi: {this.parse_temp(high)} {this.TempMode()}
                    </div>
                </div>
                <div className="weather-icon">
                    <WeatherIcon icon={icon} dn={dn} />
                </div>
            </div>
        );
    }
}

export default WeatherTile;