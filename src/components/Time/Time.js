import React, { Component } from 'react';
import config from '../../config.json';
import './Time.css';


class Time extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    TimeMode() {
        return config.TimeSettings.SelectedMode;
    }

    parse_time() {
        const time_mode = this.TimeMode();
        const {date} = this.state;
        const h = date.getHours(), m = date.getMinutes().toString().padStart(2, '0');
        var t_str = "";
        switch(time_mode) {
            case "24HR":
                t_str = h + ":" + m;
                break;
            case "12HR":
                var hours = h % 12;
                t_str = hours + ":" + m + ((hours !== h) ? "p" : "a");
                break;
            default:
                t_str = "Invalid Time Mode";
                break;
        }
        return t_str;
    }

    //setup self-update interval
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000 //every second
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    //self-update function
    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        const {date} = this.state;
        const MM = date.getMonth() + 1, DD = date.getDate(), YYYY = date.getFullYear().toString().padStart(4, '0');
        return (
            <div className="time-container">
                <div className="display-container">
                    <div className="time-display">
                        {this.parse_time()}
                    </div>
                    <div className="date-display">
                        {MM}/{DD}/{YYYY}
                    </div>
                </div>
            </div>
        );
    }
}

export default Time;