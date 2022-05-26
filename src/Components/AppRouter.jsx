import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../hooks/useProvideAuth';
import Loader from '../Loader/Loader';
import Board from '../Pages/Board';
import Registration from '../Pages/Registration';
import { privateRoutes, publicRoutes } from '../router/routes';

function AppRouter() {
  const auth = useAuth();

  if (auth.isLoading) {
    return <Loader />;
  }

  return auth.isAuth ? (
    <Routes>
      <Route path="/" element={<Board />} />
      {privateRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/board" replace />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Registration />} />
      {publicRoutes.map((route) => (
        <Route
          element={route.component}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRouter;
