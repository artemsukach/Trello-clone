import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useProvideAuth';
import Loader from '../Loader/Loader';
import { routes } from '../router/routes';

const PrivateRoute = ({ needAuth, children}) => {
  const auth = useAuth();

  if (needAuth && !auth.isAuth) {
    return <Navigate to="/" replace/>;
  }

  return children;
};

function AppRouter() {
  const auth = useAuth();
  console.log(auth)

  if (auth.isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          path={route.path}
          element={<PrivateRoute needAuth={route.needAuth}>{route.component}</PrivateRoute>}
          key={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
}

export default AppRouter;
