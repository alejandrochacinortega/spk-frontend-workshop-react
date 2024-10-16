import React, { useState, useEffect } from 'react';
import './todoList.css';
import { addTodo, deleteTodo } from '../../api/todo';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  // Use useEffect to fetch initial todos from db.json
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch('http://localhost:3000/todos');
        const data: Todo[] = await response.json();
        console.log('data ', data);
        const initialTodos = data.map((item) => ({
          id: item.id,
          title: item.title,
          completed: item.completed,
        }));
        setTodos(initialTodos);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };

    fetchTodos();
  }, []); // Empty dependency array means this effect runs once on mount

  /**
   * Adds a new todo item to the list. If the text is not empty,
   * it calls the addTodo function, adds the new item to the list,
   * and resets the input field.
   */
  const handleAddTodo = async () => {
    try {
      if (newTodo.trim()) {
        const response = await addTodo(newTodo);

        if (response.ok) {
          const todo = response.todo;
          setTodos([...todos, todo]);
          setNewTodo('');
        }
      }
    } catch (error) {
      console.log('error ', error);
    }
  };

  const handleDelete = async (id: number) => {
    alert(`TODO: handleDelete ${id}`);
  };

  const handleEdit = async (id: number) => {
    alert(`TODO: handleEdit ${id}`);
  };

  const handleCompletedTodo = async (id: number) => {
    alert(`TODO: handleCompletedTodo ${id}`);
  };

  const renderUncompletedTodos = () => {
    return todos
      .filter((todo) => todo.completed === false)
      .map((todo) => (
        <li key={todo.id} className="todo-item">
          <span>{todo.title}</span>
          <div>
            <button
              className="delete-button"
              onClick={() => handleCompletedTodo(todo.id)}
            >
              <span>Completed</span>
            </button>
            <button
              className="delete-button"
              onClick={() => handleEdit(todo.id)}
            >
              <span>Edit</span>
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
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
          <span>{todo.title}</span>
          <div>
            <button
              className="delete-button"
              onClick={() => handleCompletedTodo(todo.id)}
            >
              <span>Undo</span>
            </button>
            <button
              className="delete-button"
              onClick={() => handleEdit(todo.id)}
            >
              <span>Edit</span>
            </button>
            <button
              className="delete-button"
              onClick={() => handleDelete(todo.id)}
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
        <button className="todo-button" onClick={handleAddTodo}>
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
