import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setServer } from "../actions";
import NavBar from "../components/Navbar";

class NavBarContainer extends Component {

    componentDidMount() {
        const {
            REACT_APP_DEV_MODE,
            REACT_APP_DEV_SERVER_ENDPOINT,
            REACT_APP_PROD_SERVER_ENDPOINT
        } = process.env;
        const dev_mode = JSON.stringify(REACT_APP_DEV_MODE) === JSON.stringify("true");
        const url = dev_mode ? REACT_APP_DEV_SERVER_ENDPOINT: REACT_APP_PROD_SERVER_ENDPOINT;
        this.props.setServer(url);
        //console.log(`url: ${url}`);
    }

    render() {
        const { auth, server } = this.props;
        return <NavBar signedIn={ auth.isSignedIn } url={server.serverEndpoint}/>;
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setServer}, dispatch);
};

const mapStateToProps = ({ auth, server }) => {
  return { auth, server };
};

//export default NavBarContainer;
export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);