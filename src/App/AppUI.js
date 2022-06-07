import React from "react";

import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Header } from "../Header";
import { ProgressBar } from "../ProgressBar";
import { NewTask } from "../NewTask";
import { TodoContext } from "../TodoContext";
// error,
//     loading,
//     totalTodo,
//     completed,
//     porcent,
//     searchValue,
//     setSearchValue,
//     searchTodo,
//     completeTodo,
//     deleteTodo,
const AppUI = () => {
    const {
        error,
        loading,
        searchTodo,
        completeTodo,
        deleteTodo 
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            {<Header/>}
            {<ProgressBar/>}
            {<NewTask/>}

            {<TodoList>
                {error && <p>Error! al cargar datos</p>}
                {loading && <p>Estamos Cargando datos...</p>}
                {(!loading && !searchTodo.length) && <p>!Agrega tu primera tareas!</p>}
                {searchTodo.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => { completeTodo(todo.text) }}
                        onDelete={() => { deleteTodo(todo.text) }}
                    />
                ))}
            </TodoList>}

            {<CreateTodoButton />}

        </React.Fragment>
    );
}
export { AppUI }