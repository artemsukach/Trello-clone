import Board from '../Pages/Board';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';

export const privateRoutes = [
  { path: '/board', component: <Board />, exact: true },
];

export const publicRoutes = [
  { path: '/login', component: <Login />, exact: true },
  { path: '/registration', component: <Registration />, exact: true },
];
