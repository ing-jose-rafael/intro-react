import React from 'react';
import './Header.css'
// import imgDevam from './img/devam.svg';

const Header = ()=>{
    const date = new Date();
    const todaysDate = date.toDateString();

    return (
        <header>
            {/* <img src="/src/img/devam.svg" alt="Devam" /> */}
            <h2>Home Tasks</h2>
            <div className="info-container">
                <p className="date">{todaysDate}</p>
                {/* <p className="counter">
                  {totalToDos - completedToDos == 0 ? '😎' : `${totalToDos - completedToDos} tasks left`}
                </p> */}
                <p className="counter">3 tasks left</p>
            </div>
        </header>
    );
}
export { Header };