import { useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

export const useUser = () => {
  const { currentUser, isAuthorized, handleCurrentUser, handleAuthorized } =
    useContext(CurrentUserContext);

  return { currentUser, isAuthorized, handleCurrentUser, handleAuthorized };
};
