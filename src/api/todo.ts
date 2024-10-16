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

/**
 * Fetches a single todo from the server.
 *
 * @param id - The id of the todo to fetch.
 * @returns A promise that resolves to an object with the following properties:
 * - ok: A boolean that is true if the request was successful and false otherwise.
 * - todo: The fetched todo if the request was successful, otherwise an empty object.
 * - error?: An optional string that is only present if the request failed.
 *   The string contains an error message.
 */

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

/**
 * Deletes a todo from the server.
 *
 * @param id - The id of the todo to delete.
 * @returns A promise that resolves to an object with the following properties:
 * - ok: A boolean that is true if the request was successful and false otherwise.
 * - id: The id of the deleted todo if the request was successful, otherwise the
 *   value of `id`.
 * - error?: An optional string that is only present if the request failed.
 *   The string contains an error message.
 */

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

/**
 * Adds a new todo to the server.
 *
 * @param title - The title of the new todo.
 * @returns A promise that resolves to an object with the following properties:
 * - ok: A boolean that is true if the request was successful and false otherwise.
 * - todo: The newly created todo if the request was successful, otherwise an empty object.
 * - error?: An optional string that is only present if the request failed.
 *   The string contains an error message.
 */
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

/**
 * Edits an existing todo item in the server.
 *
 * @param id - The id of the todo to edit.
 * @param title - The new title of the todo.
 * @param completed - An optional boolean that indicates if the todo is completed.
 * @returns A promise that resolves to an object with the following properties:
 * - ok: A boolean that is true if the request was successful and false otherwise.
 * - todo: The edited todo if the request was successful, otherwise an empty object.
 * - error?: An optional string that is only present if the request failed.
 *   The string contains an error message.
 */
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
