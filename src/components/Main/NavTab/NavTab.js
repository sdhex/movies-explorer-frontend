import './NavTab.css';

function NavTab() {
  return (
    <nav className="navtab">
      <ul className="navtab__list">
        <li className="navtab__list-item">
          <a href="#about-project" className="navtab__link">
            О проекте
          </a>
        </li>
        <li className="navtab__list-item">
          <a href="#technologies" className="navtab__link">
            Технологии
          </a>
        </li>
        <li className="navtab__list-item">
          <a href="#student" className="navtab__link">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
