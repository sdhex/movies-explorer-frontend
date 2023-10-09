const isRequired = (value) => {
  if (!value) {
    return 'Поле обязательно для заполнения';
  }
};

const minLength = (min) => (value) => {
  if (value.length < min) {
    return `Поле должно содержать минимально ${min} символов`;
  }
};

const maxLength = (max) => (value) => {
  if (value.length > max) {
    return `Поле может содержать максимально ${max} символов`;
  }
};

const isValidEmail = (value) => {
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
    return 'Поле должно быть коректным email-адресом';
  }
};

const isValidName = (value) => {
  const pattern = /^[A-Za-zА-Яа-яЁё\\-\\s]+$/;

  if (!pattern.test(value)) {
    return 'Поле может содержать только: латинские и русские буквы, дефис или пробелы';
  }

  return '';
};

const isValidPassword = (value) => {
  if (!/[A-Z]/.test(value)) {
    return 'Поле должно содержать хотя бы одну заглавную букву';
  }

  if (!/[a-z]/.test(value)) {
    return 'Поле должно содержать хотя бы одну маленькую букву';
  }

  if (!/\d/.test(value)) {
    return 'Поле должно содержать хотя бы одну цифру';
  }

  if (!/[!@#$%^&()_+{}[\]:;<>,.?\\|-]/.test(value)) {
    return 'Поле может содержать только [A-z] буквы, цифры и символы';
  }

  return '';
};

export {
  isRequired,
  minLength,
  maxLength,
  isValidEmail,
  isValidName,
  isValidPassword,
};
