import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import { NavBar } from './Nav';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "font-awesome/css/font-awesome.css"


var element = <div>hello world</div>
ReactDOM.render(<App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
