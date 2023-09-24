import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__wrapper'>
          <span className='footer__promo'>
            Учебный проект Яндекс.Практикум х BeatFilm.
          </span>
          <div className='footer__info'>
            <span className='footer__copy'>&copy; 2020</span>
            <ul className='footer__links'>
              <li className='footer__links-item'>
                <a
                  href='/'
                  target='_blank'
                  rel='noreferrer'
                  className='footer__link'
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className='footer__links-item'>
                <a
                  href='https://github.com'
                  target='_blank'
                  rel='noreferrer'
                  className='footer__link'
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
