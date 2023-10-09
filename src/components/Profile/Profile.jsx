/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useUser, useAuth, useForm, useApi } from '../../hooks';
import { FIELD_EMAIL, FIELD_NAME } from '../../constants';
import {
  isRequired,
  maxLength,
  minLength,
  isValidName,
  isValidEmail,
} from '../../utils/validationUtils';
import { TextField } from '../TextField/TextField';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { api } from '../../utils';
import './Profile.css';

const VALIDATION_RULES = {
  [FIELD_NAME]: [isRequired, minLength(2), maxLength(30), isValidName],
  [FIELD_EMAIL]: [isRequired, isValidEmail],
};

function Profile() {
  const [initialValues, setInitialValues] = useState();
  const [edit, setEdit] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [disabled, setDisabled] = useState();
  const { currentUser, handleCurrentUser } = useUser();
  const { isLoading, error, hadnleUpdate, handleSignOut } = useAuth();
  const { handleRequest: getUserInfo } = useApi(api.getUserInfo);

  const {
    values,
    errors,
    hasError,
    getErrorMessage,
    handleChange,
    handleSubmit,
  } = useForm(initialValues, VALIDATION_RULES, hadnleUpdate);

  const inputProps = (name, validateRules) => {
    return {
      value: (values && values[name]) || '',
      name: name,
      error: hasError(name),
      helperText: getErrorMessage(name),
      readOnly: !edit,
      onChange: handleChange(name, validateRules),
    };
  };

  const hadleEdit = () => {
    setEdit(!edit);
  };

  useEffect(() => {
    if (currentUser === null) {
      getUserInfo()
        .then((userInfo) => {
          handleCurrentUser(userInfo);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    if (currentUser && values && !Object.keys(errors).length) {
      setIsValid(
        currentUser.name !== values.name || currentUser.email !== values.email
      );
    }
  }, [values, currentUser]);

  useEffect(() => {
    setInitialValues({
      [FIELD_NAME]: currentUser ? currentUser.name : '',
      [FIELD_EMAIL]: currentUser ? currentUser.email : '',
    });
  }, [currentUser]);

  useEffect(() => {
    setDisabled(!isValid || isLoading);
  }, [isValid, isLoading]);

  return (
    <main className="profile">
      <form>
        <h1 className="profile__welcome">
          Привет, {currentUser ? currentUser.name : ''}!
        </h1>
        <ul className="profile__data">
          <li className="profile__data-item">
            <span className="profile__data-item-label">Имя</span>
            <span className="profile__data-item-info">
              <TextField
                className="profile-form"
                placeholder="Введите имя"
                {...inputProps(FIELD_NAME, [
                  isRequired,
                  minLength(2),
                  maxLength(30),
                  isValidName,
                ])}
              />
            </span>
          </li>
          <li className="profile__data-item">
            <span className="profile__data-item-label">E-mail</span>
            <span className="profile__data-item-info">
              <TextField
                className="profile-form"
                placeholder="Введите e-mail"
                type="email"
                {...inputProps(FIELD_EMAIL, [isRequired, isValidEmail])}
              />
            </span>
          </li>
        </ul>

        {error ? <ErrorMessage error={error} /> : null}

        <div className="profile__buttons">
          {edit ? (
            <button
              className="profile__save-button"
              type="submit"
              disabled={disabled}
              onClick={() => {
                handleSubmit();
                hadleEdit();
              }}
            >
              Сохранить
            </button>
          ) : (
            <>
              <button
                className="profile__edit-button"
                type="button"
                onClick={hadleEdit}
              >
                Редактировать
              </button>
              <button
                className="profile__logout-button"
                type="button"
                onClick={() => {
                  handleSignOut();
                }}
              >
                Выйти из аккаунта
              </button>
            </>
          )}
        </div>
      </form>
    </main>
  );
}

export default Profile;
