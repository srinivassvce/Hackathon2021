import * as React from 'react';
import * as ReactDom from 'react-dom';
import './index.css';
import App from './App';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';



ReactDom.render(
  (<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>),
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
