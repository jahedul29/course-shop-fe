import { getUserInfo } from '@/service/auth.service';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export interface IPrivateRouteProps {
  children: ReactNode;
}
const PrivateRoute = ({ children }: IPrivateRouteProps) => {
  const user = getUserInfo();
  const location = useLocation();

  if (!user) {
    return <Navigate to={'/login'} state={{ from: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;
