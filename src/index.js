import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Page404 from './pages/404/404';

import './index.css';

import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/settings" component={Settings} />
                    <Route component={Page404} />
                </Switch>
            </Router>
        );
    }
}

ReactDOM.render(<App /> , root);

serviceWorker.unregister();
