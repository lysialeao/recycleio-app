import { Login } from '../views/Login/index'
import { LandingPage } from '../views/LandingPage'

export const routes = [
  {
    element: <LandingPage />,
    path: '/'
  },
  {
    element: <Login />,
    path: '/login'
  }
]