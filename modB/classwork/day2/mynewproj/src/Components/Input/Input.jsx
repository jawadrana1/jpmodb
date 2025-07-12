import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Input = ({label,textValue,valueKey}) => {
  return (
    <div className='m-3'>
        <label className='form-label'>{label}</label>
      <input value={valueKey} onChange={textValue} className='form-control w-250' type="text" />
    </div>
  );
}

export default Input;
