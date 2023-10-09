import { ENDPOINT_ROOT, ENDPOINTS } from '../constants';
import { BASE_HEADERS } from '../constants';

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return res.json().then((res) => {
    throw res;
  });
};

export const request = (url, options = {}) => {
  const defaultOptions = {
    method: 'POST',
    headers: BASE_HEADERS,
    credentials: 'include',
  };
  return fetch(`${ENDPOINT_ROOT}${url}`, {
    ...defaultOptions,
    ...options,
  }).then(checkResponse);
};

const mainApi = () => {
  const signUp = ({ name, password, email }) => {
    return request(ENDPOINTS.AUTH.SIGNUP, {
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  };

  const signIn = ({ password, email }) => {
    return request(ENDPOINTS.AUTH.SIGNIN, {
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };

  const signOut = () => {
    return request(ENDPOINTS.AUTH.SIGNOUT, {
      method: 'GET',
    });
  };

  const getUserInfo = () => {
    return request(ENDPOINTS.PROFILE.GET_USER, {
      method: 'GET',
    });
  };

  const updateUserInfo = (data) => {
    return request(ENDPOINTS.PROFILE.UPDATE_USER, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  };

  const getSavedMovies = () => {
    return request(ENDPOINTS.MOVIES.GET_SAVED_MOVIES, {
      method: 'GET',
    });
  };
  const saveMovies = (movie) => {
    return request(ENDPOINTS.MOVIES.SAVE_MOVIES, {
      body: JSON.stringify(movie),
    });
  };

  const deleteMovies = (movieId) => {
    return request(`${ENDPOINTS.MOVIES.DELETE_MOVIES}/${movieId}`, {
      method: 'delete',
    });
  };

  return {
    signUp,
    signIn,
    signOut,
    getUserInfo,
    updateUserInfo,
    getSavedMovies,
    saveMovies,
    deleteMovies,
  };
};

export const api = mainApi();
