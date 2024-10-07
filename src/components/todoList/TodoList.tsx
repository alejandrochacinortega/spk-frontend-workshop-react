import React, { useState } from 'react';
import './todoList.css';

type Todo = {
  id: number;
  text: string;
};

const TodoList: React.FC = () => {
  // TODO 1: Use the useState hook to create a new variable (todos and setTodos). It must be an array of Todo. Set the initial value to an empty array.
  // TODO 2: Use the useState hook to create a new variable (newTodo and setNewTodo). It must be a string. Set the initial value to an empty "".

  // TODO 3: Uncomment the code form line 31 to 51

  // TODO 5: Finish the demo


  const addTodo = () => {
    alert("Create todo logic")
  };

  const deleteTodo = (id: number) => {
    console.log("item to delete ", id)
    alert("Create delete logic")
  };

  return (
    <div className="todo-container">
      {/* <div className="todo-input-container">
        <input
          className="todo-input"
          value={newTodo}
          onChange={(e) => alert("Add set new todo logic")}
          placeholder="What are your tasks?"
        />
        <button className="todo-button" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <button className="delete-button" onClick={() => deleteTodo(todo.id)}>
              <span role="img" aria-label="delete">🗑️</span>
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default TodoList;