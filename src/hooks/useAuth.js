/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApi, useUser } from './';
import { ROUTES } from '../constants';
import { api } from '../utils';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { handleCurrentUser, handleAuthorized } = useUser();

  const navigate = useNavigate();

  const {
    isLoading: signUpLoading,
    error: signUpError,
    handleRequest: signUpRequest,
  } = useApi(api.signUp);

  const {
    isLoading: signInLoading,
    error: signInError,
    handleRequest: signInRequest,
  } = useApi(api.signIn);

  const {
    isLoading: signOutLoading,
    error: signOutError,
    handleRequest: signOutRequest,
  } = useApi(api.signOut);

  const {
    isLoading: updateLoading,
    error: updateError,
    handleRequest: updateRequest,
  } = useApi(api.updateUserInfo);

  const handleSignIn = async (data) => {
    try {
      await signInRequest(data);
      handleAuthorized(true);
      navigate(ROUTES.MOVIES);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignUp = async (data) => {
    const { name, email, password } = data;
    try {
      const newUser = await signUpRequest({ name, email, password });
      await handleSignIn({ email, password });
      await handleCurrentUser(newUser);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = async () => {
    try {
      await Promise.all([
        signOutRequest(),
        handleCurrentUser(null),
        handleAuthorized(false),
        localStorage.clear(),
      ]);
      navigate(ROUTES.MAIN);
    } catch (err) {
      console.error(err);
    }
  };

  const hadnleUpdate = async (data) => {
    try {
      const newUser = await updateRequest(data);
      handleCurrentUser(newUser);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setIsLoading(
      signUpLoading || signInLoading || signOutLoading || updateLoading
    );
  }, [signUpLoading || signInLoading || signOutLoading || updateLoading]);

  useEffect(() => {
    if (signUpError || signInError || signOutError || updateError) {
      setError(signUpError || signInError || signOutError || updateError);
    } else {
      setError(null);
    }
  }, [signUpError || signInError || signOutError || updateError]);

  return {
    error,
    isLoading,
    handleSignUp,
    handleSignIn,
    handleSignOut,
    hadnleUpdate,
  };
};
