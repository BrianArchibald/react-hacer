import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index }) {
  return(
    <div className="todo">
      {todo.text}
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Example Text',
      isCompleted: false
    },
    {
      text: 'Second Round',
      isCompleted: false
    },
    {
      text: 'Build it',
      isCompleted: false
    }
  ]);

  return(
    <div className="app">    
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}

      </div>
    </div>
  )


}

export default App;
