import {waitMs} from './wait';

export const getRandomNumberOfSize = (size) => {
  return Math.floor(Math.random() * size);
};

export const randomApiWait = async () => {
  const randomMs = getRandomNumberOfSize(2000);
  const ms = randomMs + 1000;

  await waitMs(ms);
};
