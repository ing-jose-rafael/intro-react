import React from "react";
import './TodoSearch.css';

function TodoSearch(){
    const onSearchValueChange = (event)=>{
        console.log(event);
    }
    return (
        <input 
        onChange={onSearchValueChange}
        className="Todo-Search" 
        placeholder="Tarea"/>
    );
}

export { TodoSearch }