import './ErrorMessage.css';

function ErrorMessage({ error }) {
  const message = error.message ? error.message : 'Ошибка! Попробуйте ещё раз.';

  return (
    <div className={'error-message'} role="alert">
      {message}
    </div>
  );
}

export default ErrorMessage;
