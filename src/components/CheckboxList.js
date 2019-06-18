import React from 'react';
import CheckBox from './CheckBox';

const CheckboxList = props => {
  return (
      <React.fragment>
          {props.checkBoxes.map((item, index) => (
              <CheckBox onChange={props.onChange} name={}/>
          ))}
      </React.fragment>
  )
};