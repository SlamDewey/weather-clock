import React, { Component } from 'react';
import Cookies from 'universal-cookie';

import config from '../../config.json';

import {Link} from 'react-router-dom';

import './Settings.css';

const cookies = new Cookies();
class Settings extends Component {

    handleChange(e, cookie_name, cookie_value, cookie_location) {
        e.preventDefault();
        cookies.set(cookie_name, cookie_value, cookie_location);
        //refresh component for button coloring
        this.setState({});
    }

    map_buttons(data, cookie_to_change, current_val) {
        return data.map( (option, id) => (
            <button
                className="option-button"
                id={ (option === current_val) ? "selected" : "" }
                key={id}
                onClick={(e) => this.handleChange(e, cookie_to_change, option, '/')}>
                {option}
            </button>
        ));
    }

    TimeMode() {
        const cookies = new Cookies();
        var time_mode = cookies.get("time_mode");
        return (!time_mode) ? config.TimeSettings.DefaultMode : time_mode;
    }
    TempMode() {
        const cookies = new Cookies();
        var temp_mode = cookies.get("temp_mode");
        return (!temp_mode) ? config.WeatherSettings.DefaultMode : temp_mode;
    }

    render() {
        return (
            <div className="settings-content">
                <div className="options-section">
                    <div className="WeatherSettings">
                        Temperature Mode: {this.map_buttons(config.WeatherSettings.TemperatureModes, 'temp_mode', this.TempMode())}
                    </div>
                    <div className="TimeSettings">
                        Time Mode: {this.map_buttons(config.TimeSettings.TimeModes, 'time_mode', this.TimeMode())}
                    </div>
                </div>
                <Link to={"/"}>
                    <div className="back-button">
                        {"<< Go Back"}
                    </div>
                </Link>
            </div>
        );
    }
}
export default Settings;