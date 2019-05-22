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
            allTickers: [],
            myTickers: [],
            counter: 0
        };

        this.createData = this.createData.bind(this);
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
        const tickers = `${base_endpoint}tickers`;
        const response = await axios.get(tickers);
        // this.setState({display: response.data});
        const allTickers_ = [];
        response.data.map(ticker => {
            allTickers_.push(ticker.name);
        });
        // allTickers.forEach(ticker => {
        //     console.log(`ticker: ${ticker}`);
        // });
        //this.setState({allTickers: allTickers_});
        // this.state.allTickers.forEach(ticker => {
        //     console.log(`ticker: ${ticker}`);
        // });
        //console.log(response);

        this.props.allTickers(allTickers_);

    }

    createData(name, calories, fat, carbs, protein) {
        this.setState(prevState => {
            prevState.counter += 1
        });
        return { id: this.state.counter, name, calories, fat, carbs, protein };
    }


    render() {
        //console.log(`props: ${JSON.stringify(this.props)}`);
        //return <h1>{this.state.display}</h1>
        const obj_data = [
            {name: 'Cupcake' , calories: 305, fat: 3.7, carbs: 67, protein: 4.3},
            {name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9},
            {name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0}
        ];
        const arr_data = [];
        //const keys = obj_data.keys();
        Object.keys(obj_data).forEach(key => {
            arr_data.push(this.createData(obj_data[key].name, obj_data[key].calories, obj_data[key].fat, obj_data[key].carbs, obj_data[key].protein))
        });
        return (
            <div>
                <h1>{this.props.server.serverEndpoint}</h1>
                <MomentumTable data={arr_data} />
            </div>
        )
    }
}


const mapStateToProps = ({server}) => {
    return {server};
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({signIn, allTickers}, dispatch)
};


// export default connect(mapStateToProps)(MomentumContainer);
export default connect(mapStateToProps, mapDispatchToProps)(MomentumContainer);


