import React, { Component } from 'react';
import Weather from '../../components/Weather/Weather';
import Time from '../../components/Time/Time';
import config from '../../config.json';
import '../shared.css';
import './Home.css';


class Home extends Component {

  Location() {
    console.log(config)
    return [config.LocationSettings.Zip, config.LocationSettings.Country];
  }

  render() {
    const loc = this.Location();
    const zip = loc[0], country = loc[1];
    return (
      <div className="content">
        <Weather zip={zip} country={country} />
        <Time zip={zip} country={country} />
      </div>
    );
  }
}

export default Home;
