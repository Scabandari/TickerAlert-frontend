import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CheckBox from '../components/CheckBox';
import axios from "axios";

// ref: https://medium.com/@wlodarczyk_j/handling-multiple-checkboxes-in-react-js-337863fd284e

class AssetListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map(),
            checkBoxes: [
                {
                    name: 'check-box-1',
                    key: 'checkBox1',
                    label: 'Check Box 1',
                },
                {
                    name: 'check-box-2',
                    key: 'checkBox2',
                    label: 'Check Box 2',
                },
            ]
        };

        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        const base_endpoint = this.props.server.serverEndpoint;
        const tickers = `${base_endpoint}tickers`;
        const response = await axios.get(tickers);
        const allTickers = response.data;
        //console.log(`array?: ${Array.isArray(allTickers)}`);
        // this.setState(prevState => ({
        //     allTickers.forEach(function(ticker) {
        //
        // });
        // }));
        allTickers.forEach((ticker) => {
            const {name} = ticker;
           this.setState(prevState => {
               prevState.checkBoxes.push({
                    name: name,
                   key: name,
                   label: name
               })
           })
        });
        console.log(response);

    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.checkBoxes.map(item => (
                        <label key={item.key}>
                            {item.name}
                            <CheckBox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                        </label>
                    ))
                }
            </React.Fragment>
        );
    }
}

const mapStateToProps = ({server}) => {
  return {server};
};

export default connect(mapStateToProps)(AssetListContainer);