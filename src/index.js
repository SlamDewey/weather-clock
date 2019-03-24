import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/Home/Home';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<Home />, document.getElementById('root'));

serviceWorker.unregister();
