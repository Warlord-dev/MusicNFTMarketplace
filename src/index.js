import { render } from "react-dom";
// import 'bootstrap/dist/css/bootstrap.css';
import App from './frontend/components/app.js';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import "./frontend/assets/animated.css";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import '../node_modules/elegant-icons/style.css';
import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './frontend/assets/style.scss';

const rootElement = document.getElementById("root");
render( <App />, rootElement);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
