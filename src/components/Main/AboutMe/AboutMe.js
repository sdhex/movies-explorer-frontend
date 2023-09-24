import './AboutMe.css';

import MePhoto from '../../../images/vitaly.png';
import SectionTitle from '../../SectionTitle/SectionTitle';

function AboutMe() {
  return (
    <section className='about-me' id='student'>
      <div className='container'>
        <SectionTitle title='Студент' />
        <div className='about-me__wrapper'>
          <div className='about-me__info'>
            <div className='about-me__text'>
              <h2 className='about-me__name'>Виталий</h2>
              <h5 className='about-me__position'>
                Фронтенд-разработчик, 30 лет
              </h5>
              <p className='about-me__biography'>
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У
                меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
                бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
                Контур». После того, как прошёл курс по веб-разработке, начал
                заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <ul className='about-me__links'>
              <li className='about-me__links-item'>
                <a
                  href='https://github.com'
                  target='_blank'
                  rel='noreferrer'
                  className='about-me__link'
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <img src={MePhoto} alt='Виталий' className='about-me__photo'></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
