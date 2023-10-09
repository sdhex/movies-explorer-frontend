import { useState, useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import AuthScreen from '../AuthScreen/AuthScreen';
import { TextField } from '../TextField/TextField';
import { FIELD_EMAIL, FIELD_PASSWORD } from '../../constants/fields';
import { useAuth } from '../../hooks';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {
  isRequired,
  minLength,
  isValidEmail,
  isValidPassword,
} from '../../utils/validationUtils';
import '../AuthScreen/AuthScreen.css';

const INITIAL_VALUES = {
  [FIELD_EMAIL]: '',
  [FIELD_PASSWORD]: '',
};
const VALIDATION_RULES = {
  [FIELD_EMAIL]: [isRequired, isValidEmail],
  [FIELD_PASSWORD]: [isRequired],
};

function Login() {
  const { error, isLoading, handleSignIn } = useAuth();

  const {
    values,
    isValid,
    hasError,
    getErrorMessage,
    handleChange,
    handleSubmit,
  } = useForm(INITIAL_VALUES, VALIDATION_RULES, handleSignIn);

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
    <main className="login">
      <AuthScreen title="Рады видеть!" name="login">
        <form className="form" method="" onSubmit={handleSubmit}>
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
            {isLoading ? 'Авторизация...' : 'Войти'}
          </button>
        </form>
      </AuthScreen>
    </main>
  );
}

export default Login;
