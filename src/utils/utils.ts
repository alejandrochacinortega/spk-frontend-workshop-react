export const delay = (ms = 3000): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
