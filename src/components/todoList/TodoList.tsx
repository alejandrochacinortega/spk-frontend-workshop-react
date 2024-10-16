import React, { useState, useEffect } from 'react';
import './todoList.css';
import { addTodo, deleteTodo, editTodo } from '../../api/todo';
import { delay } from '../../utils/utils';

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  // Use useEffect to fetch initial todos from JSONPlaceholder
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        await delay();
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
    try {
      const response = await deleteTodo(id);

      if (response.ok) {
        setTodos(todos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      console.log('error ', error);
    }
  };

  const handleEdit = async (id: number) => {
    const editedTodo = todos.find((todo) => todo.id === id);

    if (!editedTodo) return;
    const newTodo = prompt('Enter new todo', editedTodo.title);
    if (newTodo) {
      const edited = await editTodo(id, newTodo, editedTodo.completed);

      if (!edited.ok) return;
      setTodos(todos.map((todo) => (todo.id === id ? edited.todo : todo)));
    }
  };

  const handleCompletedTodo = async (id: number) => {
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) return;
    const editedTodo = await editTodo(id, todo.title, !todo.completed);
    console.log('editedTodo ', editedTodo);

    if (!editedTodo.ok) return;
    console.log('editedTodo ', editedTodo);
    setTodos(todos.map((todo) => (todo.id === id ? editedTodo.todo : todo)));
  };

  const renderUncompletedTodos = () => {
    if (todos.length === 0) {
      return <h2>No todos</h2>;
    }

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

      {todos.length > 0 && <h3>Completed tasks</h3>}

      <ul className="todo-list">{renderCompletedTodos()}</ul>
    </div>
  );
};

export default TodoList;
