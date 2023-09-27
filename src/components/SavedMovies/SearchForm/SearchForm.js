import { useState } from 'react';
import FilterCheckbox from '../../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="container-movie">
      <div className="container-movie__search-box">
        <form
          className="search-form"
          id="search-and-filter"
          action="#"
          name="search-and-filter"
        >
          <div className="search-form__search">
            <input
              className="search-form__input"
              form="search-and-filter"
              name="search"
              placeholder="Фильм"
              type="search"
              autoComplete="off"
              autoCapitalize="off"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery || ''}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              className="search-form__icon"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.79292 8.26377C6.361 9.69569 4.03939 9.69569 2.60747 8.26377C1.17555 6.83185 1.17555 4.51024 2.60747 3.07832C4.03939 1.6464 6.361 1.6464 7.79292 3.07832C9.22484 4.51024 9.22484 6.83185 7.79292 8.26377ZM8.2333 9.64673C6.27308 11.1461 3.45749 10.9994 1.66466 9.20658C-0.28796 7.25396 -0.28796 4.08813 1.66466 2.13551C3.61728 0.182888 6.78311 0.182888 8.73573 2.13551C10.5285 3.92826 10.6753 6.74368 9.17608 8.70389L12.7428 12.2706L11.8 13.2134L8.2333 9.64673Z"
                fill="#959595"
              />
            </svg>
            <button
              className="search-form__submit-button"
              type="submit"
              form="search-and-filter"
            >
              Найти
            </button>
          </div>
          <FilterCheckbox
            filterLabel="Короткометражки"
            filterForm="search-and-filter"
          />
        </form>
        <span className="container-movie__error"></span>
      </div>
    </div>
  );
}

export default SearchForm;
