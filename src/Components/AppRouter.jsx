import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import Error from '../Pages/Error';
import Registration from '../Pages/Registration';
import { privateRoutes, publicRoutes } from '../router/routes';

function AppRouter() {
  const {isAuth} = useContext(AuthContext)

  return isAuth ? (
    <Routes>
      <Route path="/">
        {privateRoutes.map((route) => (
          <Route
            component={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Route
        path="*"
        element={<Error to="/error" replace />}
    />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/">
        <Route index element={<Registration />} />
        {publicRoutes.map((route) => (
          <Route
            element={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}
          />
        ))}
        <Route
        path="*"
        element={<Error to="/error" replace />}/>
      </Route>
    </Routes>
  );
}

export default AppRouter;
