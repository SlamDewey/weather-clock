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
        const {date, morn, noon, eve, icon, dn} = this.props;
        return (
            <div className="weather-tile">
                <div className="weather-tile-date">
                    {this.parse_date(date)}
                </div>
                <div className="temp">
                    <div className="small-temp-text">
                        <table style={{margin: 'auto', width: '75%', minWidth: '95px'}}>
                            <tbody>
                                <tr>
                                    <td>
                                        6am:
                                    </td>
                                    <td>
                                        {this.parse_temp(morn)} {this.TempMode()}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        12pm:
                                    </td>
                                    <td>
                                        {this.parse_temp(noon)} {this.TempMode()}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        6pm:
                                    </td>
                                    <td>
                                        {this.parse_temp(eve)} {this.TempMode()}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="weather-icon-container">
                    <WeatherIcon icon={icon} dn={dn} />
                </div>
            </div>
        );
    }
}

export default WeatherTile;