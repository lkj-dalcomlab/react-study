import React from 'react';
import ReactDOM from 'react-dom/client';
// import {default as Main} from "./transferComponent/Main";
import Main from './bootstrap/Main';
// import Game from './tutorial/Game'
// import reportWebVitals from './reportWebVitals';
// import Test from "./testModule/Test";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
