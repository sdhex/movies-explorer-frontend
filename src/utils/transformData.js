import { ENDPOINT_BEATFILM_ROOT } from '../constants';

export const transformData = (data) => {
  const check = (property) => {
    return property ? property : 'Не указано';
  };
  return {
    country: check(data.country),
    director: check(data.director),
    duration: check(data.duration),
    year: check(data.year),
    description: check(data.description),
    image: check(`${ENDPOINT_BEATFILM_ROOT}${data.image.url}`),
    trailerLink: check(data.trailerLink),
    thumbnail: check(`${ENDPOINT_BEATFILM_ROOT}${data.image.url}`),
    movieId: check(data.id),
    nameRU: check(data.nameRU),
    nameEN: check(data.nameEN),
  };
};
