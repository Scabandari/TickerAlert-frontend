import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import queryString from "query-string";
import GoogleAuth from "./components/GoogleAuth";
import GoogleLogout from "./components/GoogleLogout";

class App extends Component {
    componentWillMount() {
        // var query = queryString.parse(this.props.location.search);
        // if (query.token) {
        //     window.localStorage.setItem("jwt", query.token);
        //     this.props.history.push("/");
        // }
    }

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
