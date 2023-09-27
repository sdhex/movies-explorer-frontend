import PromoBackgroundImage from '../../../images/promo-bg.svg';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__wrapper">
        <h2 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h2>
        <img
          src={PromoBackgroundImage}
          alt=""
          className="promo__bg-image"
          draggable="false"
        />
      </div>
    </section>
  );
}

export default Promo;
