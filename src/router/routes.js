import Error from "../Pages/Error"
import Login from "../Pages/Login"
import Registration from "../Pages/Registration"

export const privateRoutes = [
]

export const publicRoutes = [
  {path: '/login', component: <Login/>, exact: true},
  {path: '/registration', component: <Registration/>, exact: true},
  {path: '/error', component: <Error/>, exact: true},
]