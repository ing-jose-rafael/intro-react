import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(){
    const onClickBtn = () => {
        alert('Alert ');
    }
    return (
        <button 
        className="CreateTodoButton"
        onClick={onClickBtn}
        >+</button>
    );
}

export { CreateTodoButton }