import React from 'react';
import './App.css';

function TodoForm({addTodo}){
    //value = user input
    const [value, setValue ] = React.useState('');

     const handleSubmit = e  => {
        e.preventDefault();
        if(!value) return;
        addTodo(value)
        setValue('');
    }
    // form user input
    //handles Submit with function
    //value updated on onChange event (e)
    return (
        <form onSubmit={handleSubmit}>
        <input 
            type="text"
            className="input"
            value= {value}
            placeholder="Add Todo..."
            onChange={e => setValue(e.target.value)}
        />
    </form>
    );
}

export default TodoForm;