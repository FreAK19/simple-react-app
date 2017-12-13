import React from 'react';

const Input = (props) => {
  return (
    <div className="input-field">
      <i className="material-icons prefix">{props.icon}</i>
      <input type={props.type} className="validate" name={props.name}/>
      <label>{props.placeholder}</label>
    </div>
  )
};

export default Input;