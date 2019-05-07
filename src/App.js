import React, { Component } from "react";
import {Route, Switch} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import GoogleAuth from "./components/GoogleAuth";
import GoogleLogout from "./components/GoogleLogout";
import Login from "./components/Login";
import MomentumContainer from "./containers/MomentumContainer";

const Home = () => <GoogleLogout />;  // TODO Get rid of home and put logout button in app
const Logout = () => <h1>Logout</h1>;  // TODO don't need this


class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/Login" component={Login} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Logout" exact component={Logout} />
                    <Route path="/Momentum" exact component={MomentumContainer} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
