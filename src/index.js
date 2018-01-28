import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Gjs from './gjs'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Gjs />, document.getElementById('gjs'));
registerServiceWorker();
