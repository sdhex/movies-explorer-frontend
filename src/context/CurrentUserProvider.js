import { BASE_AUTHORIZED } from '../constants';
import { CurrentUserContext } from './CurrentUserContext';
import { useEffect, useState } from 'react';
import { setCached, getCached, removeCached } from '../utils';

const initialValues = getCached(BASE_AUTHORIZED);

export const CurrentUserProvider = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(!!initialValues);
  const [currentUser, setCurrentUser] = useState(null);

  const handleAuthorized = (data) => {
    setIsAuthorized(!!data);
  };

  const handleCurrentUser = (data) => {
    if (data !== null) {
      setCurrentUser(data);
      setIsAuthorized(true);
      setCached(BASE_AUTHORIZED, true);
    } else {
      setCurrentUser(null);
      setIsAuthorized(false);
      removeCached(BASE_AUTHORIZED);
    }
  };

  useEffect(() => {
    if (isAuthorized || currentUser) {
      setCached(BASE_AUTHORIZED, true);
    } else {
      removeCached(BASE_AUTHORIZED);
    }
  }, [isAuthorized, currentUser]);

  return (
    <CurrentUserContext.Provider
      value={{
        isAuthorized: isAuthorized,
        currentUser: currentUser,
        handleCurrentUser,
        handleAuthorized,
      }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
