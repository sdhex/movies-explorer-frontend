import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Overlay from '../Overlay/Overlay';
import ProfileButton from '../Profile/ProfileButton/ProfileButton';
import './HeaderMobileMenu.css';

function HeaderMobileMenu() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function handleShowMobileMenu() {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <>
      <button
        className={`header__button ${showMobileMenu ? 'header__button_open' : ''
          }`}
        onClick={handleShowMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      {showMobileMenu ? <Overlay /> : ''}
      <div
        className={`header-mobile-menu ${showMobileMenu ? 'header-mobile-menu--show' : ''
          }`}
      >
        <div className='header-mobile-menu__top'>
          <Link
            to='/'
            className='header-mobile-menu__main-link'
            onClick={handleShowMobileMenu}
          >
            Главная
          </Link>
          <Navigation onClick={handleShowMobileMenu} />
        </div>
        <div className='header-mobile-menu__bottom'>
          <ProfileButton onClick={handleShowMobileMenu} />
        </div>
      </div>
    </>
  );
};

export default HeaderMobileMenu;
