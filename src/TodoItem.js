import React from "react";

function TodoItem(params) {
    return (
        <li>
            <span>C</span>
            <p>{params.text}</p>
            <span>X</span>
        </li>
    );    
}

export { TodoItem }