/*
  This file cointains the initialization of our web app.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './variables.css';
import './global.css';
import Router from './routes';
import axios from 'axios';

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  if (error.request.status === 403 || error.request.status === 401) {
      console.log(error.request);
      localStorage.clear();
      alert("A sua requisição foi rejeitada, iremos te redirecionar para a página inicial.");
      window.location.pathname = '/';
  }
  return Promise.reject(error);
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
