import React, { Component } from "react";
import {connect} from 'react-redux';
// import {Route, Switch} from "react-router-dom";
// import {BrowserRouter} from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth";
import GoogleLogout from "./components/GoogleLogout";
import { setServer } from "./actions";

class App extends Component {

    componentDidMount() {
            const dev = process.env.REACT_APP_DEV_SERVER_ENDPOINT;
            const prod = process.env.REACT_APP_PROD_SERVER_ENDPOINT;
            const base_endpoint = process.env.REACT_APP_DEV_MODE ? dev : prod;
            this.props.dispatch(setServer(base_endpoint));
    }

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
            </div>
        );
    }
}


export default connect()(App);
