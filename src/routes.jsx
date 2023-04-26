import {
   Route,
   BrowserRouter,
   Routes as Router
} from 'react-router-dom'

import { routes } from './enum/routes'

export const Routes = () => {
   return(
      <BrowserRouter>
         <Router>
            { routes.map((route, index) => <Route element={route.element} path={route.path} key={index} exact/>) }
         </Router>
      </BrowserRouter>
    )
}
