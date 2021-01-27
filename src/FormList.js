import React from 'react';

const FormList = (props) => {
  return (
    <div className="formstyle ma4 pa4 dib tc col-lg-3 col-xs">
      <h1>{props.name}</h1>
      <p>{props.Inputtype}</p>
    </div>
  );
};

export default FormList;
