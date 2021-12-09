import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {BrowserRouter, Route } from "react-router-dom";
import 'leaflet/dist/leaflet.css'
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Route exact path="/">
    <App/>
    </Route>
    </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
