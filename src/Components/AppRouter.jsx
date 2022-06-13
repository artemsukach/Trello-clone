import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useProvideAuth';
import Loader from '../Loader/Loader';
import Board from '../Pages/Board';
import Login from '../Pages/Login';
import { routes } from '../router/routes';
import PrivateRoute from './PrivateRoute';

function AppRouter() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      {auth.isAuth ? (
        <Route path="/" element={<Board />} />
      ) : (
        <Route path="/" element={<Login />} />
      )}

      {routes.map((route) => (
        <Route
          path={route.path}
          element={
            <PrivateRoute needAuth={route.needAuth}>
              {route.component}
            </PrivateRoute>
          }
          key={route.path}
          exact={route.exact}
        />
      ))}
    </Routes>
  );
}

export default AppRouter;
