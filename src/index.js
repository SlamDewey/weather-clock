import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Page404 from './pages/404/404';

import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

class App extends Component {
    render() {
        return(
            <Switch>
                <Route exact path={'/'} render={() => <Home />} />
                <Route path={'/settings'} render={() => <Settings  />} />
                <Route render={() => <Page404 />} />
            </Switch>
        );
    }
}

ReactDOM.render(
<Router>
    <App />
</Router>,
root);

serviceWorker.unregister();
