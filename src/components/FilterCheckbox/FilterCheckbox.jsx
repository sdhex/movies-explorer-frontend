import './FilterCheckBox.css';

function FilterCheckbox({
  filterLabel,
  filterForm,
  name,
  checked,
  value,
  onChange,
}) {
  return (
    <label className="filter-checkbox">
      {filterLabel}
      <input
        className="filter-checkbox__toggle"
        form={filterForm}
        value={value}
        checked={checked}
        name={name}
        type="checkbox"
        onChange={onChange}
      />
      <span className="filter-checkbox__track"></span>
    </label>
  );
}

export default FilterCheckbox;
