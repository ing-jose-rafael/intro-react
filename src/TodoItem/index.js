import React from "react";
import './TodoItem.css';
import imgChecked from './img/checked.svg';
import imgUncheck from './img/uncheck.svg';
import imgTrash from './img/trash.svg';

function TodoItem(params) {
    const {text,
        completed,
        onComplete,
        onDelete} = params;

    // const onComplete = ()=>{
    //     alert('Ya completaste la tarea '+text);
    // }
    
    // const onDelete = ()=>{
    //     alert('Borraste la tarea '+text);
    // }

    return (
        
        // <li className="Todo-Item">
        //     <span className={`Icon Icon-check ${params.completed && 'Icon-check--active'}`}>
        //         √
        //     </span>
        //     <p className={`Todo-Item-p ${params.completed && 'Todo-Item-p--complete'}`}>
        //         {params.text}
        //     </p>
        //     <span className="Icon Icon-delete">X</span>
        // </li>
        <li className={`items ${completed && "completed"}`}>
            <img
                // onClick={params.onComplete}
                onClick={onComplete}
                src={ completed ? imgChecked : imgUncheck }
                alt="check-box"
            />
            <div className="item-info">
                <p>{text}</p>
                <img src={imgTrash} alt="trash" onClick={onDelete}/>
                {/* <img onClick={params.onDelete} src="/src/img/trash.svg" alt="trash" /> */}
            </div>
        </li>
    );
}

export { TodoItem }