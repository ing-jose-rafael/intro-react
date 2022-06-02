import React from 'react';
import './NewTask.css';
import imgPlus from './img/plus.svg'
import imgLupa from './img/lupa.svg'

const NewTask = (props) => {
  return (
      <form 
      className='form-container'
      onSubmit={props.submit}
      >
        <input {...props.register} autoComplete="off" name='addTask' className='add-input' type="text" placeholder='Add a new task...' />
        <button type="submit" className='add-btn'><img src={imgLupa} alt="search" /></button>
      </form>
  );
};

export { NewTask };