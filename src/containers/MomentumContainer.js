import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
//import { bindActionCreators } from 'redux'
import queryString from 'query-string';
import MomentumTable from '../components/MomentumTable';
import { signIn } from "../actions";


class MomentumContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            //allTickers: [],
            //myTickers: [],
            counter: 0,
            chartData: []
        };

        this.createData = this.createData.bind(this);
        //this.fetchMomentum = this.fetchMomentum.bind(this);
        //this.fetchTimeFrames = this.fetchTimeFrames.bind(this);
    }


    componentWillMount() {
        // TODO Should this be here? Wherever the server routes us back to
        const loc_search = queryString.parse(this.props.location.search);
        const user_id = loc_search.user_id;
        //console.log(user_id);
        //this.props.dispatch(signIn(user_id));
        this.props.signIn(user_id);
    }

    async componentDidMount() {
        const base_endpoint = this.props.server.serverEndpoint;
        const tickers_endpoint = `${base_endpoint}tickers`;
        const tickers = await axios.get(tickers_endpoint);
        for (const ticker of tickers.data) {
            const momentum = this.createData(
                ticker.name,
                ticker.momentum.month,
                ticker.momentum.week,
                ticker.momentum.day,
                ticker.momentum.hr);

            //console.log(`momentum: ${JSON.stringify(momentum)}`);
            this.setState(prevState => {
                const list = [...prevState.chartData, momentum];
                return {
                    counter: prevState.counter,
                    chartData: list
                }
            });
        }
        //console.log(`this.state: ${JSON.stringify(this.state)}`);
    }

    createData(name, month, week, day, hour) {
        this.setState(prevState => {
            prevState.counter += 1
        });
        return { id: this.state.counter, name, month, week, day, hour };
    }

    render() {

        return (
            <div style={{'paddingLeft': '8px', 'paddingRight': '8px'}}>
                <MomentumTable data={this.state.chartData} />
            </div>
        )
    }
}


const mapStateToProps = ({server, allTickers}) => {
    return {server, allTickers};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({signIn}, dispatch)
};


// export default connect(mapStateToProps)(MomentumContainer);
export default connect(mapStateToProps, mapDispatchToProps)(MomentumContainer);


