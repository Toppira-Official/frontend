import React from 'react';
import { Navigate, useLocation } from 'react-router';

interface RequireAuthProps {
  children: React.ReactElement;
}

// TODO: این قسمت بعدا باید به سیستم احراز هویت واقعی وصل شود
const useIsAuthenticated = () => {
  return false;
};

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};
