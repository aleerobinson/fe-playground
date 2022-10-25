import {useFetch} from './useFetch';

const key = 'dob';
const url = '/api/individuals';

export const useIndividual = (id) => {
  const _key = [key, id];
  const _url = `${url}/${id}`;

  return useFetch(_key, _url);
};
