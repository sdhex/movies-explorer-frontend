import './FilterCheckBox.css';

function FilterCheckbox({ filterLabel, filterForm }) {
  return (
    <label className='filter-checkbox'>
      {filterLabel}
      <input
        className='filter-checkbox__toggle'
        form={filterForm}
        name='toggle'
        type='checkbox'
      />
      <span className='filter-checkbox__track'></span>
    </label>
  );
}

export default FilterCheckbox;
