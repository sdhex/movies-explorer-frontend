import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../Protected/ProtectedRoute';
import { ROUTES } from '../../constants';

import './App.css';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path={ROUTES.MAIN} index element={<Main />} />
        <Route element={<ProtectedRoute />}>
          <Route path={ROUTES.PROFILE} element={<Profile />} />
          <Route path={ROUTES.MOVIES} element={<Movies />} />
          <Route path={ROUTES.SAVED_MOVIES} element={<SavedMovies />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute auth={true} />}>
        <Route path={ROUTES.SIGN_IN} element={<Login />} />
        <Route path={ROUTES.SIGN_UP} element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
