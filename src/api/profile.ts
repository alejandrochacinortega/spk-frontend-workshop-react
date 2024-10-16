import { delay } from '../utils/utils';

export interface IProfile {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  phone: string;
}

export const getProfile = async (): Promise<{
  ok: boolean;
  profile: IProfile | null;
  error?: string;
}> => {
  try {
    await delay();
    const profile = await fetch(`http://localhost:3000/profile`)
      .then((response) => response.json())
      .then((json) => json);
    return { ok: true, profile: profile };
  } catch (error) {
    console.error('Error fetching todos:', error);
    return {
      ok: false,
      profile: null,
      error: "Opps. We couldn't find todo. Please try again.",
    };
  }
};
