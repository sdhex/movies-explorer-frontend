import { useLocation } from 'react-router-dom';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import HeaderMobileMenu from '../HeaderMobileMenu/HeaderMobileMenu';
import SigninLink from '../Login/SigninLink/SignInLink';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AccountButton from '../Profile/ProfileButton/ProfileButton';
import SignupLink from '../Register/SignupLink/SignupLink';

import './Header.css';

function Header() {
  const location = useLocation();
  const loggedIn = true;
  const isMedia768 = useMediaQuery(768);

  return (
    <header
      className={`header ${location.pathname === '/' ? 'wrapper__bg-promo' : ''
        }`}
    >
      <div className='container'>
        <div className='header__wrapper'>
          <Logo />
          {loggedIn ? (
            <div className='header__menu header__menu_noauth'>
              {isMedia768 & loggedIn ? (
                <HeaderMobileMenu />
              ) : (
                <>
                  <Navigation />
                  <AccountButton />
                </>
              )}
            </div>
          ) : (
            <div className='header__menu header__menu--auth'>
              <SignupLink />
              <SigninLink />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
