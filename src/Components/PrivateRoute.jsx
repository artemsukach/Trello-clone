import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useProvideAuth';

const PrivateRoute = ({ needAuth, children }) => {
  const auth = useAuth();

  if (needAuth && !auth.isAuth) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
