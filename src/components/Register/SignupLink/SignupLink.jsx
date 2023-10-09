import { Link } from 'react-router-dom';

import './SignupLink.css';
import { ROUTES } from '../../../constants';

function SignupLink() {
  return (
    <Link to={ROUTES.SIGN_UP} className="signup-link">
      Регистрация
    </Link>
  );
}

export default SignupLink;
