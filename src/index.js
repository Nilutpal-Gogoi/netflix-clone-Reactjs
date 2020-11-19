import React from 'react';
import { render } from 'react-dom';
import App from './App.js';
import "normalize.css";
import {GlobalStyles} from  "./global-styles";

render(
  <React.Fragment>
    <GlobalStyles></GlobalStyles>
    <App />
  </React.Fragment>
  ,document.getElementById('root'));

