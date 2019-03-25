import React, { Component } from 'react';

import './SettingsButton.css';

const NORMAL = "sbcont";

class SettingsButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            container: NORMAL
        }
    }

    render() {
        const {onClick, href, target} = this.props;
        const {container} = this.state;
        return (
            <a href={href} target={target}>
                <div className={container} onClick={onClick}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </a>
        );
    }

}

export default SettingsButton;