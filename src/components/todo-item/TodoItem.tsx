import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Todo } from '../todoList/TodoList';
import { delay } from '../../utils/utils';

export const TodoItem = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        await delay();
        const response = await fetch('http://localhost:3000/todos/' + id);
        const data: Todo = await response.json();
        console.log('data ', data);
        setTodo(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching todos:', error);
        setLoading(false);
      }
    };

    fetchTodos();
  }, [id]); // Empty dependency array means this effect runs once on mount

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!todo) {
    return <div>No todo found</div>;
  }

  return (
    <div>
      <h2>Title: {todo?.title}</h2>
      <p>Status: {todo?.completed ? '✅ Completed' : 'Not completed'}</p>
    </div>
  );
};
