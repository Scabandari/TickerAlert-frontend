import React, { Component } from "react";
import logo from "../logo.svg";
import "../App.css";
import queryString from "query-string";
import GoogleAuth from "./GoogleAuth";
import GoogleLogout from "./GoogleLogout";

class Login extends Component {

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

export default Login;
