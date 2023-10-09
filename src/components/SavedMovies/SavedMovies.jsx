/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Preloader from '../Preloader/Preloader';
import { getCached, setCached, api } from '../../utils';
import {
  FIELD_SEARCH,
  FIELD_SHORTS,
  MOVIES_SHORT_DURATION,
  MOVIES_SAVED_CACHED,
} from '../../constants';
import { useApi } from '../../hooks';

const initialSearch = {
  [FIELD_SEARCH]: '',
  [FIELD_SHORTS]: false,
};

function SavedMovies() {
  const [search, setSearch] = useState(initialSearch);
  const [searchedMovies, setSearchedMovies] = useState(null);
  const [savedMovies, setSavedMovies] = useState(
    getCached(MOVIES_SAVED_CACHED)
  );

  const {
    isLoading: isLoadingSavedMovies,
    error: errorSavedMovies,
    handleRequest: handleSavedMovies,
  } = useApi(api.getSavedMovies);

  const { error: errorSave, handleRequest: saveMovies } = useApi(
    api.saveMovies
  );

  const { error: errorDelete, handleRequest: deleteMovies } = useApi(
    api.deleteMovies
  );

  const isLoading = isLoadingSavedMovies;
  const error = errorSavedMovies || errorSave || errorDelete;

  const getSavedMovies = async () => {
    const dataSavedMovies = await handleSavedMovies();
    setCached(MOVIES_SAVED_CACHED, dataSavedMovies);
    setSavedMovies(dataSavedMovies);
    return dataSavedMovies;
  };

  const filterMovies = (movies, data) => {
    let result = null;
    if (savedMovies && savedMovies.length > 0) {
      result = savedMovies.filter((movie) => {
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
    setSearchedMovies(result);
  };

  const handleSearch = (data) => {
    setSearch(data);
    filterMovies(savedMovies, data);
  };

  const handleSave = async (isSaved, movieId, data) => {
    if (isSaved && savedMovies) {
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

  useEffect(() => {
    if (!savedMovies) {
      getSavedMovies();
    }
    if (savedMovies) {
      setSearchedMovies(savedMovies);
    }
  }, [savedMovies]);

  return (
    <main className="main">
      <SearchForm
        search={search}
        onSearch={handleSearch}
        onFilter={handleSearch}
      />

      {isLoading || error ? (
        <div className="container-movie">
          {isLoading ? <Preloader /> : null}
          {error ? <ErrorMessage error={error} /> : null}
        </div>
      ) : null}

      {!isLoading && !error && savedMovies && savedMovies.length === 0 ? (
        <div className="container-movie">Нет сохраненных фильмов</div>
      ) : null}

      {!isLoading && !error && searchedMovies?.length === 0 ? (
        <div className="container-movie">Ничего не найдено</div>
      ) : null}

      {!error && searchedMovies && searchedMovies?.length > 0 ? (
        <MoviesCardList
          data={searchedMovies}
          onSave={handleSave}
          variant="saved"
        />
      ) : null}
    </main>
  );
}

export default SavedMovies;
