import React from 'react';
import { TodoContext } from '../TodoContext';
import './Header.css'
// import imgDevam from '../img/devam.svg';

const Header = ()=>{
    const date = new Date();
    const todaysDate = date.toDateString();
    const {total} = React.useContext(TodoContext);

    return (
        <header>
            {/* <img src="/src/img/devam.svg" alt="Devam" /> */}
            <h2>Lista <span>Com</span>pras</h2>
            <div className="info-container">
                <p className="date">{todaysDate}</p>
                {/* <p className="counter">
                  {totalToDos - completedToDos == 0 ? '😎' : `${totalToDos - completedToDos} tasks left`}
                </p> */}
                <p className="counter">{total} Artículos</p>
            </div>
        </header>
    );
}
export { Header };