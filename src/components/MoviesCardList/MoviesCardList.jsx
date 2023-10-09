import MoviesCard from '../MoviesCard/MoviesCard';
import { useGrid } from '../../hooks';
import { BREAKPOINTS } from '../../constants';
import './MoviesCardList.css';

const GRID_CONFIG = {
  [BREAKPOINTS['xs']]: {
    count: 5,
    increment: 2,
  },
  [BREAKPOINTS['md']]: {
    count: 8,
    increment: 2,
  },
  [BREAKPOINTS['xl']]: {
    count: 12,
    increment: 3,
  },
};

function MoviesCardList({ data, variant = 'default', onSave }) {
  const { count, hadnleAddMore } = useGrid(GRID_CONFIG);

  if (!data || !data.length) return null;

  const cards = data.length > count ? data.slice(0, count) : data;

  return (
    <section className="movies-card-list">
      <div className="container-movie">
        <div className="movies-card-list__wrapper">
          {cards.map((item) => (
            <MoviesCard
              key={`movies-card-${item.movieId}`}
              data={item}
              onSave={onSave}
              variant={variant}
            />
          ))}
        </div>

        {data.length > count ? (
          <button
            onClick={hadnleAddMore}
            className="movies-card-list__loadmore-button"
          >
            Ещё
          </button>
        ) : null}
      </div>
    </section>
  );
}

export default MoviesCardList;
