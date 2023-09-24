import SectionTitle from '../../SectionTitle/SectionTitle';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className='about-project' id='about-project'>
      <div className='container'>
        <SectionTitle title='О проекте' />
        <div className='about-project__wrapper'>
          <div className='about-project__text'>
            <div className='about-project__text-container'>
              <h4 className='about-project__text-title'>
                Дипломный проект включал 5 этапов
              </h4>
              <p className='about-project__info'>
                Составление плана, работу над бэкендом, вёрстку, добавление
                функциональности и финальные доработки.
              </p>
            </div>
            <div className='about-project__text-container'>
              <h4 className='about-project__text-title'>
                На выполнение диплома ушло 5 недель
              </h4>
              <p className='about-project__info'>
                У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                соблюдать, чтобы успешно защититься.
              </p>
            </div>
          </div>
          <div className='about-project__schedule'>
            <span>1 неделя</span>
            <span>4 недели</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
