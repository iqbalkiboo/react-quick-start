import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/reset.css'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./app";
import store from './store';

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>,
    </Provider>,
    rootElement
);
