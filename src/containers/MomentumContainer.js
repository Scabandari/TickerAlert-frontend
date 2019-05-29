import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';
//import { bindActionCreators } from 'redux'
import queryString from 'query-string';
import MomentumTable from '../components/MomentumTable';
import { signIn, allTickers } from "../actions";


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
            //console.log(`ticker: ${JSON.stringify(ticker, null, 2)}`);
            // const momentum = {
            //     name: ticker.name,
            //     hr: ticker.momentum.hr,
            //     min15: ticker.momentum.min15,
            //     min5: ticker.momentum.min5,
            //     min: ticker.momentum.min
            // };
            const momentum = this.createData(
                ticker.name,
                ticker.momentum.hr,
                ticker.momentum.min15,
                ticker.momentum.min5,
                ticker.momentum.min);

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


    createData(name, hr, min15, min5, min) {
        this.setState(prevState => {
            prevState.counter += 1
        });
        return { id: this.state.counter, name, hr, min15, min5, min };
    }

    // async fetchMomentum(ticker='APHA', timeFrame='hour') {
    //     const {serverEndpoint} = this.props.server; //todo extract this to calling funciton and pass param
    //     //console.log(`server endpoint: ${serverEndpoint}`);
    //     const momentum = await axios.get(`${serverEndpoint}/momentum?interval=${timeFrame}&symbol=${ticker}`);
    //     console.log(`momentum: ${JSON.stringify(momentum)}`);
    //     return momentum;
    // }

    // fetchMomentum(ticker='APHA', timeFrame='hour') {
    //     const {serverEndpoint} = this.props.server; //todo extract this to calling funciton and pass param
    //     //console.log(`server endpoint: ${serverEndpoint}`);
    //     axios.get(`${serverEndpoint}momentum?interval=${timeFrame}&symbol=${ticker}`)
    //         .then(response => {
    //             return response;
    //         }).catch(err => {
    //             console.log(`error in fetchMomentum: ${err}`);
    //             return 0
    //         });
    // }

    // todo need this? why not just get all time frames?
    // async fetchTimeFrames() {
    //     const {serverEndpoint} = this.props.server; // todo here too
    //     const response = await axios.get(`${serverEndpoint}timeframes`);
    //     // console.log(`timeframes: ${serverEndpoint}timeframes`);
    //     // console.log(`timeframes: ${JSON.stringify(response.data)}`);
    //     return response.data;
    // }

    render() {
        //console.log(`props: ${JSON.stringify(this.props)}`);
        //return <h1>{this.state.display}</h1>
        // const obj_data = [
        //     {name: 'Cupcake' , calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
        //     {name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9},
        //     {name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0}
        // ];
        // const obj_data = [
        //     {name: 'WEED' , hr: 305, min15: 3.7, min5: 67, min: 4.3},
        //     {name: 'APHA', hr: 452, min15: 25.0, min5: 51, min: 4.9},
        //     {name: 'VFF', hr: 262, min15: 16.0, min5: 24, min: 6.0}
        // ];
        // const arr_data = [];
        // //const keys = obj_data.keys();
        // // Object.keys(obj_data).forEach(key => {
        // //     arr_data.push(this.createData(
        // //         obj_data[key].name,
        // //         obj_data[key].calories,
        // //         obj_data[key].fat,
        // //         obj_data[key].carbs,
        // //         obj_data[key].protein))
        // // });
        // obj_data.forEach(entry => {
        //         arr_data.push(this.createData(
        //             entry.name,
        //             entry.hr,
        //             entry.min15,
        //             entry.min5,
        //             entry.min
        //         ));
        // });
        //console.log(`arr_data: ${JSON.stringify(arr_data)}`);
        return (
            <div>
                <MomentumTable data={this.state.chartData} />
            </div>
        )
    }
}


const mapStateToProps = ({server, allTickers}) => {
    return {server, allTickers};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({signIn, allTickers}, dispatch)
};


// export default connect(mapStateToProps)(MomentumContainer);
export default connect(mapStateToProps, mapDispatchToProps)(MomentumContainer);


