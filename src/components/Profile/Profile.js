import './Profile.css';

function Profile() {
  return (
    <main className="profile">
      <h1 className="profile__welcome">Привет, {'Виталий'}!</h1>
      <ul className="profile__data">
        <li className="profile__data-item">
          <span className="profile__data-item-label">Имя</span>
          <span className="profile__data-item-info">{'Виталий'}</span>
        </li>
        <li className="profile__data-item">
          <span className="profile__data-item-label">E-mail</span>
          <span className="profile__data-item-info">{'pochta@yandex.ru'}</span>
        </li>
      </ul>
      <div className="profile__buttons">
        <button className="profile__edit-button">Редактировать</button>
        <button className="profile__logout-button">Выйти из аккаунта</button>
      </div>
    </main>
  );
}

export default Profile;
