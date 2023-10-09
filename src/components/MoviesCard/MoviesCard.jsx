/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import { convertDuration, getCached } from '../../utils';
import './MoviesCard.css';
import { IconSaved } from './iconSaved';
import { IconRemove } from './iconRemove';

const buttonContent = {
  save: 'Сохранить',
  saved: <IconSaved />,
  remove: <IconRemove />,
};

function MoviesCard({ data, variant, onSave }) {
  const { duration, image, trailerLink, movieId, nameRU } = data;
  const [savedMovies, setSavedMovies] = useState(
    getCached('moviesSaved') || []
  );
  const [isSaved, setIsSaved] = useState();

  const action = variant === 'saved' ? 'remove' : isSaved ? 'saved' : 'save';

  const handleSave = async () => {
    await onSave(isSaved, movieId, data);
    setIsSaved(!isSaved);
  };

  useEffect(() => {
    setSavedMovies(getCached('moviesSaved') || []);
  }, [isSaved]);

  useEffect(() => {
    if (savedMovies.length > 0) {
      setIsSaved(savedMovies.some((item) => item.movieId === movieId));
    }
  }, [savedMovies]);

  return (
    <div className="movies-card">
      <a
        className="movies-card__image"
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        {image ? <img src={image} alt={nameRU} /> : null}
      </a>
      <button
        className={`movies-card__button movies-card__button--${action}`}
        onClick={handleSave}
      >
        {buttonContent[action]}
      </button>
      <a
        href={trailerLink}
        target="_blank"
        rel="noreferrer"
        className="movies-card__info"
      >
        <span className="movies-card__title">{nameRU}</span>
        <span className="movies-card__duration">
          {convertDuration(duration)}
        </span>
      </a>
    </div>
  );
}

export default MoviesCard;
