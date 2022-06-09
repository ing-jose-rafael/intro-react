import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {

    const {addTodo,setOpenModal} = React.useContext(TodoContext);
    const [ newTodoValue, setNewTodoValue ] = React.useState('');
    const onCancelar = () => {
        setOpenModal(false);
    };
    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(newTodoValue.length <= 0)return;
        addTodo(newTodoValue);
        setOpenModal(false);

    };
    return (
        <form onSubmit={onSubmit} className="form-container-add">
            {/* <label>.....</label> */}
            <textarea 
                placeholder="Escribe aquí tu tarea pendiente" 
                value={newTodoValue} 
                onChange={onChange}/>
            
            <div className="TodoForm-buttonContainer">
                <button 
                    className="TodoForm-button TodoForm-button-cancel"
                    type="button" 
                    onClick={onCancelar}>
                        Cancelar
                </button>
                <button 
                    className="TodoForm-button TodoForm-button-add"
                    type="submit">
                        Añadir
                </button>
            </div>
        </form>
    );
}

export {TodoForm};