import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
//import { bindActionCreators } from 'redux'
import queryString from 'query-string';
import { signIn } from "../actions";


class MomentumContainer extends Component {

    state = {display: "Waiting"};

    componentWillMount() {
        const loc_search = queryString.parse(this.props.location.search);
        const user_id = loc_search.user_id;
        //console.log(user_id);
        this.props.dispatch(signIn(user_id));
    }

    // async componentDidMount() {
    //     const dev = process.env.REACT_APP_DEV_SERVER_ENDPOINT;
    //     const prod = process.env.REACT_APP_PROD_SERVER_ENDPOINT;
    //     const base_endpoint = process.env.REACT_APP_DEV_MODE ? dev : prod;
    //     const api_endpoint = `${base_endpoint}momentum`;
    //     //TODO above can be handled on app startup and managed by redux??
    //     //console.log(api_endpoint);
    //
    //     const response = await axios.get(api_endpoint);
    //     this.setState({display: response.data});
    //
    // }

    componentDidMount() {
        //console.log(`this.props.location: ${JSON.stringify(this.props.location.search)}`);
    }

    render() {

        //return <h1>{this.state.display}</h1>
        return <h1>working</h1>
    }
}

// // Tried this
// const actionCreators = { signIn };
// export default connect(null, actionCreators)(MomentumContainer);

// Tried this
export default connect()(MomentumContainer);

// This works
//export default MomentumContainer;
