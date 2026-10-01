import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext.jsx';

export function useAuth() {
  const {
    user,
    authStatus,
    hydrateSession,
    loginWithPassword,
    verifyTwoFactor,
    registerAccount,
    logout,
    saveCustomerProfile,
    changeCustomerPassword,
    updateUser,
  } = useApp();

  const navigate = useNavigate();

  const logoutAndGoHome = useCallback(async () => {
    await logout();
    navigate('/', { replace: true });
  }, [logout, navigate]);

  return {
    user,
    authStatus,
    isAuthenticated: authStatus === 'authenticated',
    isLoading: authStatus === 'loading',
    hydrateSession,
    loginWithPassword,
    verifyTwoFactor,
    registerAccount,
    logout,
    logoutAndGoHome,
    saveCustomerProfile,
    changeCustomerPassword,
    updateUser,
  };
}
