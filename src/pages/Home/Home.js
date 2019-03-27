import React, { Component } from 'react';

import Weather from '../../components/Weather/Weather';
import Time from '../../components/Time/Time';
import SettingsButton from '../../components/SettingsButton/SettingsButton';

import config from '../../config.json';

import './Home.css';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: config.LocationSettings.DefaultLatitude,
            lon: config.LocationSettings.DefaultLongitude
        }
        this.Location = this.Location.bind(this);
        this.setPos = this.setPos.bind(this);
    }

    setPos(la, lo) {
        this.setState({
            lat: la,
            lon: lo
        });
    }

    Location() {
        if ("geolocation" in navigator) {
            /* geolocation is available */
            navigator.geolocation.getCurrentPosition((position) => {
                this.setPos(position.coords.latitude, position.coords.longitude);
            });
        } else {
            alert("Can't Read Geolocation, using default...");
            this.setPos(config.LocationSettings.DefaultLatitude, config.LocationSettings.DefaultLongitude);
        }
    }

    componentDidMount() {
        this.Location();
    }

    render() {
        const {lat, lon} = this.state;
        return (
            <div className="home">
                <div className="content">
                    <div className="content-column" id="time">
                        <Time lat={lat} lon={lon} />
                    </div>
                    <div className="content-column" id="weather">
                        <Weather lat={lat} lon={lon} />
                    </div>
                </div>
                <div className="bottom-panel">
                    <SettingsButton href={'/settings'}/>
                </div>
                <div className="copyright">
                    Copyright {'\u00A9'} 2019 Jared Massa
                </div>
            </div>
        );
    }
}

export default Home;
