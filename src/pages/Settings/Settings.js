import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './Settings.css';

class Settings extends Component {

    render() {
        return (
            <div className="settings-content">
                <Link to={"/"}>
                    <div className="back-button">
                        {"<< Go Back"}
                    </div>
                </Link>
                <div className="options-section">
                
                </div>
            </div>
        );
    }

}

export default Settings;