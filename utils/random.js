import {waitMs} from './wait';

export const getRandomNumberOfSize = (size) => {
  return Math.floor(Math.random() * size);
};

export const randomApiWait = async () => {
  const randomMs = getRandomNumberOfSize(1000);
  const ms = randomMs + 500;

  await waitMs(ms);
};
