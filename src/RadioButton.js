import React from 'react';

const RadioButton = () => {
  return (
    <div className="col-lg-3 col-xs">
      <input type="radio" value="salaried" name="Employment" />
      <label for="salaried">salaried </label>
      <br />
      <input type="radio" value="self-employed" name="Employment" />
      <label for="self-employed"> self-employed </label>
    </div>
  );
};

export default RadioButton;
