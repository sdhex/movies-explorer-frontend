import { Link, useLocation } from 'react-router-dom';

import ProfileIconMain from '../../../images/profile-icon-main.svg';
import ProfileIcon from '../../../images/profile-icon.svg';
import './ProfileButton.css';

function ProfileButton({ onClick }) {
  const location = useLocation();
  return (
    <Link
      to='/profile'
      aria-label='Профиль'
      className='profile-button'
      onClick={onClick}
    >
      Аккаунт
      <img
        src={location.pathname === '/' ? ProfileIconMain : ProfileIcon}
        alt='Profile'
      />
    </Link>
  );
}

export default ProfileButton;
