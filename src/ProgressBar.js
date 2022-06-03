import React from 'react';
import './ProgressBar.css';
const ProgressBar = (params) => {
    // const {completedToDos, totalToDos, toDos} = React.useContext(ToDoContext);
    // const percentage = parseInt((completedToDos/totalToDos)*100);
    const percentage = params.porcentaje;
    return (
      <>
        <div className='progress-container'>
          {/* <progress value={`${(completedToDos/totalToDos)*100}`} max="100"></progress> */}
          <progress value={percentage} max="100"></progress>
        </div>
          { 4 > 0 ? <p className="progress-number">{percentage}% completed</p> : 
          <p className='progress-default'>Start getting shit done!</p>}
      </>
    );
  };
  
  export { ProgressBar };