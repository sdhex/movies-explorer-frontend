import { convertDuration } from '../../../utils/convertDuration';
import './MoviesCard.css';

function MoviesCard({ card, isSaved, onCardSave }) {
  return (
    <div className='movies-card'>
      <a
        className='movies-card__image'
        href={card.trailerLink}
        target='_blank'
        rel='noreferrer'
      >
        <img src={card.image} alt={card.nameRu} />
      </a>
      <button
        className={`${isSaved ? 'movies-card__saved-button' : 'movies-card__save-button'
          }`}
        onClick={onCardSave}
      >
        {isSaved ? (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='9'
            height='7'
            viewBox='0 0 9 7'
            fill='none'
          >
            <path
              d='M0.5 3.34998L3.31905 5.59998L8.5 1.09998'
              stroke='white'
              strokeWidth='1.3'
            />
          </svg>
        ) : (
          'Сохранить'
        )}
      </button>
      <a
        href={card.trailerLink}
        target='_blank'
        rel='noreferrer'
        className='movies-card__info'
      >
        <span className='movies-card__title'>{card.nameRu}</span>
        <span className='movies-card__duration'>
          {convertDuration(card.duration)}
        </span>
      </a>
    </div>
  );
}

export default MoviesCard;
