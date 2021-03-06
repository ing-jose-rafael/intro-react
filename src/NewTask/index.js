import React from 'react';
import './NewTask.css';
// import imgPlus from '../img/plus.svg'
import imgLupa from '../img/lupa.svg'
import { TodoContext } from '../TodoContext';

const NewTask = () => {
  const {searchValue,setSearchValue} = React.useContext(TodoContext);
  // const [searchValue,setSearchValue]= React.useState('');

  const onSearchValueChange = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value)
  }
  return (
    <form
    className='form-container'
    // onSubmit={props.submit}
    >
      <input
        // {...props.register} 
        onChange={onSearchValueChange}
        value={searchValue}
        autoComplete="off"
        name='addTask'
        className='add-input'
        type="text"
        placeholder='Add a new product...' />
      <button type="submit" className='add-btn'><img src={imgLupa} alt="search" /></button>
        {/* <p>{searchValue}</p> */}
    </form>
  );
};

export { NewTask };