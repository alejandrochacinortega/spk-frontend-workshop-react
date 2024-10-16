import { Todo } from '../components/todoList/TodoList';

type Profile = {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
};

export const getProfile = async (): Promise<{
  ok: boolean;
  profile: Profile;
  error?: string;
}> => {
  try {
    const profile = await fetch(`http://localhost:3000/profile`)
      .then((response) => response.json())
      .then((json) => json);
    return { ok: true, profile: profile };
  } catch (error) {
    console.error('Error fetching todos:', error);
    return {
      ok: false,
      profile: {} as Profile,
      error: "Opps. We couldn't find todo. Please try again.",
    };
  }
};
