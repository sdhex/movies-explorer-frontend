import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="container">
        <h5 className="portfolio__title">Портфолио</h5>
        <ul className="portfolio__links">
          <li className="portfolio__links-item">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="portfolio__link"
            >
              Статичный сайт
            </a>
          </li>
          <li className="portfolio__links-item">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="portfolio__link"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="portfolio__links-item">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="portfolio__link"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
