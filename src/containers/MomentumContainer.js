import React, {Component} from 'react';
import axios from 'axios';
import queryString from 'query-string';


class MomentumContainer extends Component {

    state = {display: "Waiting"};

    componentWillMount() {
        const query = queryString.parse(this.props.location.search);
        console.log(`query: ${JSON.stringify(query)}`);
    }

    async componentDidMount() {
        const dev = process.env.REACT_APP_DEV_SERVER_ENDPOINT;
        const prod = process.env.REACT_APP_PROD_SERVER_ENDPOINT;
        const base_endpoint = process.env.REACT_APP_DEV_MODE ? dev : prod;
        const api_endpoint = `${base_endpoint}momentum`;
        //console.log(api_endpoint);

        const response = await axios.get(api_endpoint);
        //console.log(`response: ${response}`);
        // this.setState({display: JSON.stringify(response)});
        this.setState({display: response.data});

    }
    render() {
        return <h1>{this.state.display}</h1>
    }
}

export default MomentumContainer;