import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {

    render() {
        return (
            <div className="settings-content">
                <a href={"/#/"}>
                    <div className="back-button">
                        {"<< Go Back"}
                    </div>
                </a>
                <div className="options-section">
                
                </div>
            </div>
        );
    }

}

export default Settings;