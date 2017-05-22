import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './style.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import MainPage from './MainPage';



ReactDOM.render(
    <MainPage />,
    document.getElementById("reac-app")
);