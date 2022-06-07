import React from "react";
// import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal,openModal}){
    // const {setOpenModal,openModal} = React.useContext(TodoContext);
    const onClickBtn = () => {
        setOpenModal(!openModal);
    }
    return (
        <button 
        className="CreateTodoButton"
        onClick={onClickBtn}
        >+</button>
    );
}

export { CreateTodoButton }