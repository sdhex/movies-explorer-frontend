/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useForm } from '../../hooks';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import SearchIcon from './SearchIcon';
import { FIELD_SEARCH, FIELD_SHORTS } from '../../constants';
import { isRequired } from '../../utils';
import { TextField } from '../TextField/TextField';
import './SearchForm.css';

const VALIDATION_RULES = {
  [FIELD_SEARCH]: [isRequired],
  [FIELD_SHORTS]: [],
};

const initialSearch = {
  [FIELD_SEARCH]: '',
  [FIELD_SHORTS]: false,
};

function SearchForm({
  values: initialValues = initialSearch,
  onSearch,
  onFilter,
}) {
  const { values, hasError, getErrorMessage, handleChange, handleSubmit } =
    useForm(initialValues, VALIDATION_RULES, onSearch);

  const [disabled, setDisabled] = useState(false);

  const inputProps = (name, validateRules) => {
    return {
      value: (values && values[name]) || '',
      name: name,
      error: hasError(name),
      helperText: getErrorMessage(name),
      onChange: handleChange(name, validateRules),
    };
  };

  useEffect(() => {
    setDisabled(!values.search);
  }, [values]);

  useEffect(() => {
    onFilter(values);
  }, [values[FIELD_SHORTS]]);

  return (
    <div className="container-movie">
      <div className="container-movie__search-box">
        <form
          className="search-form"
          id="search-and-filter"
          action="#"
          name="search-and-filter"
          onSubmit={handleSubmit}
        >
          <div className="search-form__search">
            <TextField
              className="search-form"
              placeholder="Фильм"
              {...inputProps(FIELD_SEARCH, [isRequired])}
            />
            <SearchIcon />
            <button
              className="search-form__submit-button"
              type="submit"
              form="search-and-filter"
              disabled={disabled}
              onClick={handleSubmit}
            >
              Найти
            </button>
          </div>
          <FilterCheckbox
            filterLabel="Короткометражки"
            filterForm="search-and-filter"
            checked={values[FIELD_SHORTS]}
            {...inputProps(FIELD_SHORTS, [])}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchForm;
