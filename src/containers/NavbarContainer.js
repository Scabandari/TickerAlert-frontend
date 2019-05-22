import React, {Component} from 'react';
import {connect} from 'react-redux';
import Navbar from '../components/Navbar';


class NavbarContainer extends Component {

    render() {
        const {server, auth} = this.props;
        return (
            <Navbar signedIn={auth.isSignedIn} url={server.serverEndpoint}/>
        );
    }
}

const mapStateToProps = ({server, auth}) => {
    return {server, auth}
};

export default connect(mapStateToProps)(NavbarContainer);

