import React, { Component } from "react";
// import {Route, Switch} from "react-router-dom";
// import {BrowserRouter} from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth";
import GoogleLogout from "./components/GoogleLogout";
import Login from "./components/Login";
import MomentumContainer from "./containers/MomentumContainer";
import logo from "./logo.svg";




class App extends Component {


    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to TickerAlert</h1>
                </header>
                <GoogleAuth />
                <GoogleLogout />
            </div>
        );
    }
}

export default App;
