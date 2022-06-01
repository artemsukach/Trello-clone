import Board from '../Pages/Board';
import Login from '../Pages/Login';
import Registration from '../Pages/Registration';

export const routes = [
  { path: '/board', component: <Board />, exact: true, needAuth: true},
  { path: '/login', component: <Login />, exact: true, needAuth: false },
  { path: '/registration', component: <Registration />, exact: true, needAuth: false},
];
