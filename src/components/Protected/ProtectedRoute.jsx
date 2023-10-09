import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '../../constants';
import { useUser } from '../../hooks';

const ProtectedRoute = ({ auth = false }) => {
  const { isAuthorized } = useUser();
  const rules = auth ? !isAuthorized : isAuthorized;
  const redirectPath = auth ? ROUTES.PROFILE : ROUTES.SIGN_IN;

  return <>{rules ? <Outlet /> : <Navigate to={redirectPath} />}</>;
};

export default ProtectedRoute;
