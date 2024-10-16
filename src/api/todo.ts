import { Todo } from '../components/todoList/TodoList';

export const getTodos = async (): Promise<{
  ok: boolean;
  todos: Todo[];
  error: string;
}> => {
  try {
    const todos = await fetch('http://localhost:3000/todos/todos')
      .then((response) => response.json())
      .then((json) => json);
    return { ok: true, todos: todos, error: '' };
  } catch (error) {
    console.error('Error fetching todos:', error);
    return {
      ok: false,
      todos: [],
      error: 'Opps. Something went wrong. Please try again.',
    };
  }
};

export const getTodo = async (
  id: number,
): Promise<{ ok: boolean; todo: Todo; error?: string }> => {
  try {
    const todo = await fetch(`http://localhost:3000/todos/${id}`)
      .then((response) => response.json())
      .then((json) => json);
    return { ok: true, todo: todo };
  } catch (error) {
    console.error('Error fetching todos:', error);
    return {
      ok: false,
      todo: {} as Todo,
      error: "Opps. We couldn't find todo. Please try again.",
    };
  }
};

export const deleteTodo = async (
  id: number,
): Promise<{ ok: boolean; id: number; error?: string }> => {
  try {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'DELETE',
    });
    return {
      ok: true,
      id: id,
    };
  } catch (error) {
    console.error('Error fetching todos:', error);
    return {
      ok: false,
      id: id,
      error: 'Opps. Something went wrong. Please try again.',
    };
  }
};

export const addTodo = async (
  title: string,
): Promise<{ ok: boolean; todo: Todo; error?: string }> => {
  try {
    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: Date.now().toString(),
        title,
        completed: false,
      }),
    });

    const todo = await response.json();

    return {
      ok: true,
      todo,
    };
  } catch (error) {
    console.error('Error fetching todos:', error);
    return {
      ok: false,
      todo: {} as Todo,
      error: 'Opps. Something went wrong. Please try again.',
    };
  }
};

export const editTodo = async (
  id: number,
  title: string,
  completed?: boolean,
): Promise<{ ok: boolean; todo: Todo; error?: string }> => {
  try {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        completed: completed,
      }),
    });

    const todo = await response.json();

    return {
      ok: true,
      todo: todo,
    };
  } catch (error) {
    console.error('Error fetching todos:', error);
    return {
      ok: false,
      todo: {} as Todo,
      error: 'Opps. Something went wrong. Please try again.',
    };
  }
};
