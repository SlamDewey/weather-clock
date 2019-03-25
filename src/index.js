import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home/Home';
import Settings from './pages/Settings/Settings';
import Page404 from './pages/404/404';

import './index.css';

import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root');

const pages = {
    Home,
    Settings,
    Page404
}

function renderPage(page) {
    ReactDOM.render(page, root);
}

function main() {
    var url = window.location.href;
    var comps = url.split("/");
    var page_request = comps[comps.length - 1].toLowerCase();
    if (page_request === "" || page_request === "home")
        renderPage(<pages.Home />);
    else if (page_request === "settings")
        renderPage(<pages.Settings />);
    else renderPage(<pages.Page404 />); 
}
main();

serviceWorker.unregister();
