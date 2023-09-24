import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppLayout from '../AppLayout/AppLayout';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import './App.css';

function App() {
  const [isErrorPage, setErrorPage] = useState(false);

  return (
    <div className='App'>
      <AppLayout isErrorPage={isErrorPage}>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route index element={<Main />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route
            path='*'
            element={<NotFound setIsErrorPage={setErrorPage} />}
          />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
