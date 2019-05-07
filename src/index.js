import React from "react";
import ReactDOM from "react-dom";
import {Route, Switch} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore, compose, applyMiddleware} from "redux";
import ReduxThunk from "redux-thunk";
import promise from 'redux-promise-middleware';
import {createLogger} from "redux-logger";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import GoogleLogout from "./components/GoogleLogout";
import MomentumContainer from "./containers/MomentumContainer";
import Login from "./components/Login";
import App from "./App";


const Home = () => <GoogleLogout />;  // TODO Get rid of home and put logout button in app
const Logout = () => <h1>Logout</h1>;  // TODO don't need this


ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route path="/" exact component={App} />
            <Route path="/Login" component={Login} />
            <Route path="/Home" component={Home} />
            <Route path="/Logout" exact component={Logout} />
            <Route path="/Momentum" exact component={MomentumContainer} />
		</Switch>
	</BrowserRouter>,
	document.getElementById("root")
);
registerServiceWorker();
