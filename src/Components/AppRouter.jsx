import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Board from '../Pages/Board';
import Registration from '../Pages/Registration';
import { privateRoutes, publicRoutes } from '../router/routes';
import Storage from '../services/Storage';

function AppRouter() {
  const isAuth = Storage.getIsAuth();

  return isAuth ? (
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
    </Routes>
  );
}

export default AppRouter;
