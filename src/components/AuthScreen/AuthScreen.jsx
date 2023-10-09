import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './AuthScreen.css';
import { ROUTES } from '../../constants';

function AuthScreen({ title, name, children }) {
  return (
    <section
      className={`auth-screen ${name === 'login' ? 'auth-screen--login' : ''}`}
    >
      <Logo />
      <h2 className="auth-screen__title">{title}</h2>
      {children}
      {name === 'register' ? (
        <span className="auth-screen__help">
          Уже зарегистрированы?
          <Link to={ROUTES.SIGN_IN} className="auth-screen__link">
            Войти
          </Link>
        </span>
      ) : (
        <span className="auth-screen__help">
          Ещё не зарегистрированы?
          <Link to={ROUTES.SIGN_UP} className="auth-screen__link">
            Регистрация
          </Link>
        </span>
      )}
    </section>
  );
}

export default AuthScreen;
