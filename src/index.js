import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./demo";
import store from "./demo/reducer/store";
import {Provider} from "react-redux";
// import {default as Index} from "./transferComponent/Index";
// import Index from './bootstrap/Index';
// import Game from './tutorial/Game'
// import reportWebVitals from './reportWebVitals';
// import Test from "./testModule/Test";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
