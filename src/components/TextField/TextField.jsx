export function TextField({
  name,
  type = 'text',
  value = '',
  label = '',
  placeholder,
  helperText = '',
  error = false,
  className = 'form',
  onChange,
  ...props
}) {
  return (
    <div
      className={`${className}__input-wrapper ${
        error ? `${className}__input-wrapper--error isErorr` : ''
      }`}
    >
      {label ? (
        <label
          className={`${className}__input-label`}
          htmlFor={`${name}-input`}
        >
          {label}
        </label>
      ) : null}

      <input
        className={`${className}__input`}
        type={type}
        name={name}
        id={`${name}-input`}
        onChange={onChange}
        value={value}
        {...props}
      />
      {helperText ? (
        <span className={`${className}__input-text`}>{helperText}</span>
      ) : null}
    </div>
  );
}
