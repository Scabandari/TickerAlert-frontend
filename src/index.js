//import 'semantic-ui-css/semantic.min.css'
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from "redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware';
import logger from "redux-logger";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from './store';

import "./index.css";
import App from "./App";
import reducers from './reducers';
import MomentumContainer from "./containers/MomentumContainer";
import Navbar from "./components/Navbar";


const { REACT_APP_DEV_MODE } = process.env;
const dev_mode = JSON.stringify(REACT_APP_DEV_MODE) === JSON.stringify("true");
const middleware = applyMiddleware(promise, thunk, logger);

let store_dev;
if (dev_mode === true) {
    console.log('App starting in development mode.');
    const allStoreEnhancers = compose(
        middleware,
        window.devToolsExtension && window.devToolsExtension()
    );
    store_dev = createStore(reducers, {}, allStoreEnhancers)
} else {
    console.log('App starting in production mode');
}

const store_production = createStore(reducers, {}, middleware);
// const store = dev_mode ? store_dev : store_production;


const store = store_production;
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/Momentum" exact component={MomentumContainer} />
            </Switch>
        </BrowserRouter>
    </Provider>,
	document.getElementById("root")
);
registerServiceWorker();
