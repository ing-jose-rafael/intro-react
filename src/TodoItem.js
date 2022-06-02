import React from "react";
import './TodoItem.css';
import imgChecked from './img/checked.svg';
import imgUncheck from './img/uncheck.svg';
import imgTrash from './img/trash.svg';

function TodoItem(params) {
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
        <li className={`items ${params.completed && "completed"}`}>
            <img
                onClick={params.onComplete}
                src={
                params.completed
                    ? imgChecked
                    : imgUncheck
                }
                alt="check-box"
            />
            <div className="item-info">
                <p>{params.text}</p>
                <img src={imgTrash} alt="trash" />
                {/* <img onClick={params.onDelete} src="/src/img/trash.svg" alt="trash" /> */}
            </div>
        </li>
    );
}

export { TodoItem }