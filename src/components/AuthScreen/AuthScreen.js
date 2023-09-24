import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './AuthScreen.css';

function AuthScreen({ title, name, onSubmit, children }) {
  return (
    <section className={`auth-screen ${name === 'login' ? 'auth-screen__login' : ''}`}>
      <Logo />
      <h2 className='auth-screen__title'>{title}</h2>
      <form className='auth-screen__form' onSubmit={onSubmit}>
        {children}
      </form>
      {name === 'register' ? (
        <span className='auth-screen__help'>
          Уже зарегистрированы?
          <Link to='/signin' className='auth-screen__link'>
            Войти
          </Link>
        </span>
      ) : (
        <span className='auth-screen__help'>
          Ещё не зарегистрированы?
          <Link to='/signup' className='auth-screen__link'>
            Регистрация
          </Link>
        </span>
      )}
    </section>
  );
}

export default AuthScreen;
