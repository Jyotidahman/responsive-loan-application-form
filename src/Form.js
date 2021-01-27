import React from 'react';
import './Form.css';
import './normalize.css';
import FormList from './FormList';
import RadioButton from './RadioButton';
import 'tachyons';

const Form = (props) => {
  return (
    <div className="container-fluid">
        <h1 className="tc"> Loan Application Form </h1>
      <div className="row">
        <FormList
          id="1"
          name="Name"
          isComponent="false"
          Inputtype={<input type="text" placeholder="Enter your name" />}
        />{' '}
        <FormList
          id="1"
          name="Email"
          isComponent="false"
          Inputtype={<input type="email" placeholder="Enter your email" />}
        />{' '}
        <FormList
          id="1"
          name="Employment"
          isComponent
          Inputtype={<RadioButton />}
        />{' '}
        <FormList
          id="1"
          name="Attach Aadhar-Card"
          isComponent="false"
          Inputtype={<input type="file" />}
        />{' '}
      </div>{' '}
    </div>
  );
};
export default Form;
