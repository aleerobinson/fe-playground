import {useFetch} from './useFetch';

const key = 'name';
const url = '/api/states';

export const useState = (id) => {
  const _key = [key, id];
  const _url = `${url}/${id}`;

  return useFetch(_key, _url);
};
