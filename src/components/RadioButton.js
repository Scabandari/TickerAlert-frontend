import React, {Component} from 'react';
import {RadioGroup, Radio} from 'react-radio-group';

class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {
        selectedValue: "close"
    };

    handleChange = value => {
        //console.log(`value: ${value}`);
        this.setState(prevState => {
            return {selectedValue: value};
        });
        this.props.toggle(value);
    };

    render() {
        const styles = {marginTop: '5px'};
        return (
            <RadioGroup style={styles} name="fruit" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
                <Radio value="close" />Price
                <Radio value="volume" />Volume
            </RadioGroup>
        );
    }
}

export default RadioButton;