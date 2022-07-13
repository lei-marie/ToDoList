import React from 'react';
import './App.css';

function Todo ({todo, index, remove}){
    function handle(){
        remove(index);
    }
    return <div className="todo" onClick={handle}>{todo.text} (X)</div>
}

export default Todo;