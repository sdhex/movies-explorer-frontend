import { checkResponse } from './MainApi';
import { ENDPOINT_BEATFILM_ROOT, ENDPOINTS, BASE_HEADERS } from '../constants';

const request = (url, options = {}) => {
  const defaultOptions = {
    method: 'POST',
    headers: BASE_HEADERS,
  };

  return fetch(`${ENDPOINT_BEATFILM_ROOT}${url}`, {
    ...defaultOptions,
    ...options,
  }).then(checkResponse);
};

const moviesApi = () => {
  const getMovies = () => {
    return request(ENDPOINTS.BEATFILM.GET_MOVIES, {
      method: 'GET',
    });
  };

  return {
    getMovies,
  };
};

export const apiBeatfilm = moviesApi();
