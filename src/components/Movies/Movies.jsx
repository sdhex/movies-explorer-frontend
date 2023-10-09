import { useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList.jsx';
import SearchForm from '../SearchForm/SearchForm';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';

import { useApi } from '../../hooks';
import { apiBeatfilm, api } from '../../utils';
import {
  FIELD_SEARCH,
  FIELD_SHORTS,
  MOVIES_CACHED,
  MOVIES_SEARCH_CACHED,
  MOVIES_SEARCH_RESULT_CACHED,
  MOVIES_SHORT_DURATION,
  MOVIES_SAVED_CACHED,
} from '../../constants';
import { getCached, setCached, transformData } from '../../utils';

const initialSearch = {
  [FIELD_SEARCH]: '',
  [FIELD_SHORTS]: false,
};

function Movies() {
  const [movies, setMovies] = useState(getCached(MOVIES_CACHED));
  const [search, setSearch] = useState(
    getCached(MOVIES_SEARCH_CACHED) || initialSearch
  );
  const [searchedMovies, setSearchedMovies] = useState(
    getCached(MOVIES_SEARCH_RESULT_CACHED)
  );
  const [savedMovies, setSavedMovies] = useState(
    getCached(MOVIES_SAVED_CACHED)
  );

  const {
    isLoading: isLoadingMovies,
    error: errorMovies,
    handleRequest: handleBeatfilm,
  } = useApi(apiBeatfilm.getMovies);

  const { error: errorSavedMovies, handleRequest: handleSavedMovies } = useApi(
    api.getSavedMovies
  );

  const { error: errorSave, handleRequest: saveMovies } = useApi(
    api.saveMovies
  );

  const { error: errorDelete, handleRequest: deleteMovies } = useApi(
    api.deleteMovies
  );

  const isLoading = isLoadingMovies;
  const error = errorMovies || errorSavedMovies || errorSave || errorDelete;

  const getSavedMovies = async () => {
    const dataSavedMovies = await handleSavedMovies();
    setCached(MOVIES_SAVED_CACHED, dataSavedMovies);
    setSavedMovies(dataSavedMovies);
    return dataSavedMovies;
  };

  const getMovies = async () => {
    const cachedMovies = getCached(MOVIES_CACHED);

    if (cachedMovies) {
      setMovies(cachedMovies);
      return cachedMovies;
    } else {
      const dataMovies = await handleBeatfilm();
      const transformedMovies = dataMovies ? dataMovies.map(transformData) : [];
      setCached(MOVIES_CACHED, transformedMovies);
      setMovies(transformedMovies);
      return transformedMovies;
    }
  };

  const filterMovies = (movies, data) => {
    let result = null;
    if (!!movies && movies.length > 0) {
      result = movies.filter((movie) => {
        const searchText = data[FIELD_SEARCH].toLowerCase().trim();
        const nameRuMatch = movie.nameRU.toLowerCase().includes(searchText);
        const nameEnMatch = movie.nameEN.toLowerCase().includes(searchText);

        const durationMatch =
          !data[FIELD_SHORTS] ||
          (data[FIELD_SHORTS] &&
            movie.duration <= Number(MOVIES_SHORT_DURATION));

        return (nameRuMatch || nameEnMatch) && durationMatch;
      });
    }

    setCached(MOVIES_SEARCH_RESULT_CACHED, result);
    setSearchedMovies(result);
  };

  const handleSearch = async (data) => {
    if (data[FIELD_SEARCH].length >= 1) {
      await setSearch(data);
      await setCached(MOVIES_SEARCH_CACHED, data);
    }
    const moviesData = await getMovies();
    await filterMovies(moviesData, data);
    getSavedMovies();
  };

  const handleFilter = async (data) => {
    if (data[FIELD_SEARCH].length >= 1) {
      await setSearch(data);
      await setCached(MOVIES_SEARCH_CACHED, data);
      if (data[FIELD_SHORTS]) {
        const moviesData = await getMovies();
        await filterMovies(moviesData, data);
      } else {
        await filterMovies(movies, data);
      }
    }
  };

  const handleSave = async (isSaved, movieId, data) => {
    if (isSaved) {
      const currentMovie = savedMovies.find((item) => item.movieId === movieId);
      const id = currentMovie['_id'];
      if (id) {
        await deleteMovies(id);
        const updateSavdedMovies = savedMovies.filter(
          (item) => item['_id'] !== id
        );
        setSavedMovies(updateSavdedMovies);
        setCached(MOVIES_SAVED_CACHED, updateSavdedMovies);
      }
    } else {
      const dataSavedMovies = await saveMovies(data);
      setSavedMovies((prev) => [...prev, dataSavedMovies]);
      setCached(MOVIES_SAVED_CACHED, [...savedMovies, dataSavedMovies]);
    }
  };

  return (
    <main className="main">
      <SearchForm
        values={search}
        onSearch={handleSearch}
        onFilter={handleFilter}
      />

      {isLoading || error ? (
        <div className="container-movie">
          {isLoading ? <Preloader /> : null}
          {error ? <ErrorMessage error={error} /> : null}
        </div>
      ) : null}

      {!isLoading && !error && !movies ? (
        <div className="container-movie">
          Укажите параметры поиска и выполните поиск
        </div>
      ) : null}

      {!isLoading && !error && searchedMovies && searchedMovies.length === 0 ? (
        <div className="container-movie">Ничего не найдено</div>
      ) : null}

      {!isLoading && !error && searchedMovies && searchedMovies.length > 0 ? (
        <MoviesCardList data={searchedMovies} onSave={handleSave} />
      ) : null}
    </main>
  );
}

export default Movies;
