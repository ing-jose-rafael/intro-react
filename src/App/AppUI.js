import React from "react";

import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { Header } from "../Header";
import { ProgressBar } from "../ProgressBar";
import { NewTask } from "../NewTask";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { EmptyTodos } from "../EmptyTodos";
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
        deleteTodo,
        openModal,
        setOpenModal,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <Header/>
            
            {!loading && <ProgressBar/>}
            <NewTask/>
            {/* <TodosLoading/> */}
            {<TodoList>
                {error && <TodosError error={error}/>}
                {loading && new Array(4).fill(1).map((item,index)=>(<TodosLoading key={index}/>))}
                {(!loading && !searchTodo.length) && <EmptyTodos/>}
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
            {openModal && (
                <Modal> 
                    <TodoForm/> 
                </Modal>
                )
            }
            
            <CreateTodoButton setOpenModal={setOpenModal}/>

        </React.Fragment>
    );
}
export { AppUI }