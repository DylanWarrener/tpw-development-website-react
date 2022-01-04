// React default imports
import React from 'react';
import ReactDOM from 'react-dom';

// React router import 
import { BrowserRouter } from 'react-router-dom';

// Main App import
import App from './App';

// Testing import
import reportWebVitals from './reportWebVitals';

// Style sheet for index.js
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
