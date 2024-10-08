import React, { useState } from 'react';
import './todoList.css';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
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

  const onCompletedTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const renderUncompletedTodos = () => {
    return todos
      .filter((todo) => todo.completed === false)
      .map((todo) => (
        <li key={todo.id} className="todo-item">
          <span>{todo.text}</span>
          <div>
            <button
              className="delete-button"
              onClick={() => onCompletedTodo(todo.id)}
            >
              <span>Completed</span>
            </button>
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
      ));
  };

  const renderCompletedTodos = () => {
    return todos
      .filter((todo) => todo.completed === true)
      .map((todo) => (
        <li key={todo.id} className="todo-item">
          <span>{todo.text}</span>
          <div>
            <button
              className="delete-button"
              onClick={() => onCompletedTodo(todo.id)}
            >
              <span>Undo</span>
            </button>
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
      ));
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
      <ul className="todo-list">{renderUncompletedTodos()}</ul>

      <h3>Completed tasks</h3>
      <ul className="todo-list">{renderCompletedTodos()}</ul>
    </div>
  );
};

export default TodoList;
