import React from 'react';
import { TodoContext } from '../TodoContext';
import './ProgressBar.css';
const ProgressBar = () => {
    // const {completedToDos, totalToDos, toDos} = React.useContext(ToDoContext);
    // const percentage = parseInt((completedToDos/totalToDos)*100);
    // const percentage = params.porcentaje;
    const {totalTodo,completed,porcent} = React.useContext(TodoContext);
    return (
      <>
        <div className='progress-container'>
          {/* <progress value={`${(completedToDos/totalToDos)*100}`} max="100"></progress> */}
          <progress value={porcent} max="100"></progress>
        </div>
          { totalTodo > completed ? <p className="progress-number">{porcent}% completed</p> : 
          <p className='progress-default'>Start getting shit done!</p>}
      </>
    );
  };
  
  export { ProgressBar };