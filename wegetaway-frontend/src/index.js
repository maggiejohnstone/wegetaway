import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import MyTrips from './MyTrips.js'
import reportWebVitals from './reportWebVitals';
import BanffTripPage from "./BanffTripPage";
import Landing from "./Landing";

ReactDOM.render(
    <React.StrictMode>
        <Landing />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();