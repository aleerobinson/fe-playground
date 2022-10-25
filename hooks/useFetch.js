import {useQuery} from 'react-query';
import {toast} from 'react-toastify';

const getIsEnabled = (key) => {
  if (!Array.isArray(key)) {
    return true;
  }

  const isEnabled = key.reduce((acc, id, i) => {
    //First entry should be a unique descriptions
    if (i === 0) {
      return acc;
    }

    if (id === null || id === undefined) {
      acc = false;

      return acc;
    }
  }, true);

  return isEnabled;
};

const handleResponse = async (url, res) => {
  if (res.status === 200) {
    const parsed = await res.json();

    toast.success(`Fetched [${url}]`);

    return parsed;
  }

  toast.error(`[${url}] Received Status [${res.status}]`);
};

const fetchWrapper = async (method, url, body) => {
  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Cache: 'no-cache',
    },
    credentials: 'include',
    body: body && JSON.stringify(body),
  };

  const res = await fetch(url, options);
  return handleResponse(url, res);
};

const onError = (err) => {
  console.log(err.message);
};

export const useFetch = (key, url, method = 'GET', body) => {
  return useQuery(key, () => fetchWrapper(method, url, body), {
    onError,
    enabled: getIsEnabled(key),
  });
};
