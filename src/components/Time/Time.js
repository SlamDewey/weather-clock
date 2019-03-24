import React, { Component } from 'react';
import config from '../../config.json';

class Time extends Component {

    TimeMode() {
        return config.TimeSettings.SelectedMode;
    }

    parse_time(time) {

    }

    render() {
        return null;
    }
}

export default Time;