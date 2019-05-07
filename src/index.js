import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import promise from 'redux-promise-middleware';
import {createLogger} from "redux-logger";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import App from "./App";


ReactDOM.render(
	<App />,
	document.getElementById("root")
);
registerServiceWorker();
