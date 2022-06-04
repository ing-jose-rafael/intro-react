import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton(){
    const onClickBtn = (arg) => {
        alert(arg);
    }
    return (
        <button 
        className="CreateTodoButton"
        onClick={()=>onClickBtn('Aqui debería abrir el modal')}
        >+</button>
    );
}

export { CreateTodoButton }