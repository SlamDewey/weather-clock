import React, { Component } from 'react';
import Weather from '../../components/Weather/Weather';
import Time from '../../components/Time/Time';
import SettingsButton from '../../components/SettingsButton/SettingsButton';

import config from '../../config.json';

import './Home.css';

class Home extends Component {

    Location() {
        return [config.LocationSettings.Zip, config.LocationSettings.Country];
    }

    render() {
        const loc = this.Location();
        const zip = loc[0], country = loc[1];
        return (
            <div className="home">
                <div className="content">
                    <div className="content-column" id="time">
                        <Time zip={zip} country={country} />
                    </div>
                    <div className="content-column" id="weather">
                        <Weather zip={zip} country={country} />
                    </div>
                </div>
                <div className="bottom-panel">
                    <SettingsButton href={'settings'}/>
                </div>
                <div className="copyright">
                    Copyright {'\u00A9'} 2019 Jared Massa
                </div>
            </div>
        );
    }
}

export default Home;
