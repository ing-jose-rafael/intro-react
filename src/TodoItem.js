import React from "react";
import './TodoItem.css'

function TodoItem(params) {
    return (
        <li className="Todo-Item">
            <span className={`Icon Icon-check ${params.completed && 'Icon-check--active'}`}>
                √
            </span>
            <p className={`Todo-Item-p ${params.completed && 'Todo-Item-p--complete'}`}>
                {params.text}
            </p>
            <span className="Icon Icon-delete">X</span>
        </li>
    );
}

export { TodoItem }