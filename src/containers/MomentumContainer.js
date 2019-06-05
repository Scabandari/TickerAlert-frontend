import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import queryString from 'query-string';
import MomentumTable from '../components/MomentumTable';
import RadioButton from '../components/RadioButton';
import PaperSheet from '../components/PaperSheet';
import { signIn, toggleMomentum } from "../actions";


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
        this.toggleMomentum = this.toggleMomentum.bind(this);
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
        //const closeOrVolume = this.props.momentumToggle.closeOrVolume;
        const base_endpoint = this.props.server.serverEndpoint;
        console.log(`base_endpoint: ${base_endpoint}`);
        const tickers_endpoint = `${base_endpoint}tickers`;
        const tickers = await axios.get(tickers_endpoint);
        console.log(`tickers: ${JSON.stringify(tickers, null, 2)}`);
        for (const ticker of tickers.data) {
            //console.log(`ticker: ${JSON.stringify(ticker, null, 1)}`);
            const momentum = this.createData(
                ticker.name,
                ticker.momentum.month,
                ticker.momentum.week,
                ticker.momentum.day,
                ticker.momentum.hr
            );

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

    toggleMomentum(value) {
        this.props.toggleMomentum(value);
    }

    createData(name, month, week, day, hour) {
        this.setState(prevState => {
            prevState.counter += 1
        });
        return {
            id: this.state.counter,
            name,
            month: {
                close: month.close,
                volume: month.volume
            },
            week: {
                close: week.close,
                volume: week.volume
            },
            day: {
                close: day.close,
                volume: day.volume
            },
            hour: {
                close: hour.close,
                volume: hour.volume
            }
        };
    }

    render() {
        //console.log(`this.props: ${JSON.stringify(this.props, null, 2)}`);

        return (
            <div style={{'paddingLeft': '8px', 'paddingRight': '8px'}}>

                <PaperSheet>
                    <RadioButton toggle={this.toggleMomentum}/>
                    <MomentumTable key_={this.props.momentumToggle.closeOrVolume} data={this.state.chartData} />
                </PaperSheet>

            </div>
        )
    }
}


const mapStateToProps = ({server, momentumToggle}) => {
    return {server, momentumToggle};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({signIn, toggleMomentum}, dispatch)
};


// export default connect(mapStateToProps)(MomentumContainer);
export default connect(mapStateToProps, mapDispatchToProps)(MomentumContainer);


