export const waitMs = (delay) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`Completed ${delay}ms Wait`), delay);
  });
};
