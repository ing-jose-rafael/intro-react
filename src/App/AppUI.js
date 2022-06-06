import React from "react";

import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Header } from "../Header";
import { ProgressBar } from "../ProgressBar";
import { NewTask } from "../NewTask";

const AppUI = ({
    totalTodo,
    completed,
    porcent,
    searchValue,
    setSearchValue,
    searchTodo,
    completeTodo,
    deleteTodo,
}) => {
    return (
        <React.Fragment>
            {<Header total={totalTodo} completed={completed} />}
            {<ProgressBar total={totalTodo} completed={completed} porcentaje={porcent} />}
            {<NewTask
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />}
            {/* {<TodoCounter/>} */}

            {/* {<TodoSearch/>} */}


            {<TodoList>
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