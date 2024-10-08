import React, { useState } from 'react';
import './todoList.css';

type Todo = {
  id: number;
  text: string;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    alert('Add Todo: ' + newTodo);
  };

  const deleteTodo = (id: number) => {
    alert('Delete Todo: ' + id);
  };

  const onEditTodo = (id: number) => {
    alert('Edit Todo: ' + id);
  };

  return (
    <div className="todo-container">
      <div className="todo-input-container">
        <input
          className="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button className="todo-button" onClick={addTodo}>
          Add
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
            <div>
              <button
                className="delete-button"
                onClick={() => onEditTodo(todo.id)}
              >
                <span>Edit</span>
              </button>
              <button
                className="delete-button"
                onClick={() => deleteTodo(todo.id)}
              >
                <span>Delete</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
