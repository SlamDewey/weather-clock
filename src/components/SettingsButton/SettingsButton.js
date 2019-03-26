import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
        const {href} = this.props;
        return (
            <Link to={href}>
                <div className="sbcont">
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </Link>
        );
    }

}

export default SettingsButton;