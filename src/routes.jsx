import {
   Route,
   BrowserRouter,
   Routes as Router
} from 'react-router-dom'

import { Register } from './views/Register'
import { Home } from './views/Home'
import { Login } from './views/Login/index'
import { LandingPage } from './views/LandingPage'
import { FindCollectionPoint } from './views/FindCollectionPoint'
import { Profile } from './views/Profile'
import { useContext } from 'react'
import { UserContext } from './context/userContext'

export const Routes = () => {

   const { user } = useContext(UserContext)

   const Private = ({ Item }) => {
      const sigend = user?.login || false

      return sigend > 0 ? <Item /> : <Login />
   }

   return(
      <BrowserRouter>
         <Router>
            <Route element={<LandingPage />} path={'/'} exact/>
            <Route element={<Login />} path={'/login'} exact/>
            <Route element={<FindCollectionPoint/>} path='/find-collection-point' exact />
            <Route element={<Private Item={Home} />} path={'/home'} exact/>
            <Route element={<Private Item={Profile} />} path={'/profile'} exact/>
            <Route element={<Register />} path='/register' exact />
         </Router>
      </BrowserRouter>
    )
}
