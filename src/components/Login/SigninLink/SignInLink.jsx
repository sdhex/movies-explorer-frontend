import { Link } from 'react-router-dom';

import './SigninLink.css';
import { ROUTES } from '../../../constants';

function SigninLink() {
  return (
    <Link to={ROUTES.SIGN_IN} className="signin-link">
      Войти
    </Link>
  );
}

export default SigninLink;
