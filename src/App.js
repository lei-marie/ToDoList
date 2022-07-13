import React from 'react';
import './App.css';
import Todo from './ToDo';
import TodoForm from './form';

function App() {
  //add initial state : array of objects
  const [todos, setTodos] = React.useState([
  {
      text: 'Review Week 14 Module', 
      isCompleted: false,
  },
  {
      text: 'Lunch Break',
      isCompleted: false,
  },
  {
      text: 'Walk the Dog',
      isCompleted: false,
  },
  {
      text: 'Gym',
      isCompleted: false,
  },
  {
      text: 'Resume studying 3hrs+',
      isCompleted: false,
  },
  ]);
//return jsx, map each todos, create div tag for each one, key is index value, text is to do that text
// gets access to local list and updates it
  const addTodo = text => {
      const newTodos = [...todos, {text, isCompleted:false}]
      setTodos(newTodos);
  }

  const removeTodo = index => {
      let temp = [...todos];
      temp.splice(index, 1);
      setTodos(temp);
  }
 
  return (
  <div className="app">
      <div className="todo-list">
  {todos.map((todo, i) => (
  <Todo index={i} key={i} todo={todo} remove={removeTodo}/>
  ))}
  <TodoForm  addTodo={addTodo} />
  </div>
  </div>
  );

}


export default App;
