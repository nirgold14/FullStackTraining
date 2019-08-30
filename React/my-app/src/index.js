import React from 'react'; // Equals to: var React = require('react'). this is the differnece with ES6
//Babet is the compiler from ES6 to js
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));

//This is the main script, it insert into the root element the requested App.





serviceWorker.unregister();
