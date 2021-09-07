import React from 'react'; // to use jsx
import ReactDOM from 'react-dom';

import App from './App'; // retrun html
import CounterApp from './counterApp'
import './index.css'; // css file


const divRoot = document.querySelector('#root');

// ReactDOM.render(<App saludo="Hola Mundo"/>, divRoot); // gives some variable to App.js
ReactDOM.render(<CounterApp />, divRoot);