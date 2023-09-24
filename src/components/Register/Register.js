import { useForm } from '../../hooks/useForm';
import AuthScreen from '../AuthScreen/AuthScreen';
import '../AuthScreen/AuthScreen.css';

function Register() {
  const { values, handleChange } = useForm();

  return (
    <main className='register'>
      <AuthScreen
        title='Добро пожаловать!'
        name='register'
      >
        <label className='form__input-wrapper'>
          Имя
          <input
            className='form__input'
            type='text'
            name='name'
            form='register'
            required
            minLength='2'
            maxLength='30'
            pattern='^[A-Za-zА-Яа-яЁё\\-\\s]+$'
            id='name-input'
            onChange={handleChange}
            value={values.name || ''}
          />
          <span className='form__input-error'></span>
        </label>
        <label className='form__input-wrapper'>
          E-mail
          <input
            className='form__input'
            type='text'
            name='email'
            form='register'
            required
            id='email-input'
            onChange={handleChange}
            value={values.email || ''}
          />
          <span className={`form__input-error`}></span>
        </label>
        <label className='form__input-wrapper'>
          Пароль
          <input
            className='form__input'
            type='password'
            name='password'
            form='register'
            required
            id='password-input'
            onChange={handleChange}
            value={values.password || ''}
          />
          <span className='form__input-error'>Что-то пошло не так...</span>
        </label>
        <button className='form__button' type='submit'>
          Зарегистрироваться
        </button>
      </AuthScreen>
    </main>
  );
}

export default Register;
