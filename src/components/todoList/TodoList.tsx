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
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onEditTodo = (id: number) => {
    const editedTodo = todos.find((todo) => todo.id === id);

    if (!editedTodo) return;
    const newTodo = prompt('Enter new todo', editedTodo.text);
    if (newTodo) {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, text: newTodo } : todo,
        ),
      );
    }
  };

  return (
    <div className="todo-container">
      <div className="todo-input-container">
        <input
          className="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
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
