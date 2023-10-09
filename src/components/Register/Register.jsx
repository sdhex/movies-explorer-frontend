import { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import AuthScreen from '../AuthScreen/AuthScreen';
import { TextField } from '../TextField/TextField';
import { FIELD_EMAIL, FIELD_NAME, FIELD_PASSWORD } from '../../constants';
import { useAuth } from '../../hooks';
import {
  isRequired,
  maxLength,
  minLength,
  isValidName,
  isValidEmail,
  isValidPassword,
} from '../../utils/validationUtils';
import '../AuthScreen/AuthScreen.css';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const INITIAL_VALUES = {
  [FIELD_NAME]: '',
  [FIELD_EMAIL]: '',
  [FIELD_PASSWORD]: '',
};
const VALIDATION_RULES = {
  [FIELD_NAME]: [isRequired, minLength(2), maxLength(30), isValidName],
  [FIELD_EMAIL]: [isRequired, isValidEmail],
  [FIELD_PASSWORD]: [isRequired, minLength(8), isValidPassword],
};

function Register() {
  const { error, isLoading, handleSignUp } = useAuth();

  const {
    values,
    isValid,
    hasError,
    getErrorMessage,
    handleChange,
    handleSubmit,
  } = useForm(INITIAL_VALUES, VALIDATION_RULES, handleSignUp);
  const [disabled, setDisabled] = useState(!isValid);

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
    setDisabled(!isValid || isLoading);
  }, [isValid, isLoading]);

  return (
    <main className="register">
      <AuthScreen title="Добро пожаловать!" name="register">
        <form className="form" onSubmit={handleSubmit}>
          <TextField
            label="Имя"
            placeholder="Введите имя"
            {...inputProps(FIELD_NAME, [
              isRequired,
              minLength(2),
              maxLength(30),
              isValidName,
            ])}
          />

          <TextField
            label="E-mail"
            placeholder="Введите e-mail"
            type="email"
            {...inputProps(FIELD_EMAIL, [isRequired, isValidEmail])}
          />

          <TextField
            label="Пароль"
            placeholder="Введите пароль"
            type="password"
            {...inputProps(FIELD_PASSWORD, [
              isRequired,
              minLength(8),
              isValidPassword,
            ])}
          />

          {error ? <ErrorMessage error={error} /> : null}

          <button className="form__button" type="submit" disabled={disabled}>
            {isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
          </button>
        </form>
      </AuthScreen>
    </main>
  );
}

export default Register;
