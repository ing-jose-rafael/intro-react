import React from "react";
// import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css'

function CreateTodoButton({setOpenModal}){
    // const {setOpenModal,openModal} = React.useContext(TodoContext);
    const onClickBtn = () => {
        setOpenModal(prevState =>!prevState);
    }
    return (
        <button 
        className="CreateTodoButton"
        onClick={onClickBtn}
        >+</button>
    );
}

export { CreateTodoButton }