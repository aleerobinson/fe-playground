import {useFetch} from './useFetch';

const key = 'multi';
const baseUrl = '/api/individuals';

export const useMultipleExample = (individualId, stateId) => {
  const _key = [key, individualId, stateId];
  const url = `${baseUrl}/${individualId}/states/${stateId}`;

  return useFetch(_key, url);
};
