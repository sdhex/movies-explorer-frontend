import { Link, useLocation } from 'react-router-dom';

import ProfileIconMain from '../../../images/profile-icon-main.svg';
import ProfileIcon from '../../../images/profile-icon.svg';
import './ProfileButton.css';
import { ROUTES } from '../../../constants';

function ProfileButton({ onClick, isHeader }) {
  const location = useLocation();
  return (
    <Link
      to={ROUTES.PROFILE}
      aria-label="Профиль"
      className="profile-button"
      onClick={onClick}
    >
      Аккаунт
      <img
        src={
          location.pathname === '/' && isHeader ? ProfileIconMain : ProfileIcon
        }
        alt="Profile"
      />
    </Link>
  );
}

export default ProfileButton;
