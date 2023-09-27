import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound({ setIsErrorPage }) {
  useEffect(() => {
    setIsErrorPage(true);
  }, [setIsErrorPage]);

  return (
    <div className="not-found">
      <div className="not-found__info">
        <h1 className="not-found__title">404</h1>
        <h6 className="not-found__subtitle">Страница не найдена</h6>
      </div>
      <Link
        to="/"
        className="not-found__home-button"
        onClick={() => setIsErrorPage(false)}
      >
        Назад
      </Link>
    </div>
  );
}

export default NotFound;
