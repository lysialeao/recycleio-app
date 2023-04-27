import PropTypes from 'prop-types';

import { Menu } from "../Menu"
import { Footer } from '../Footer';

export const Layout = ({ children }) => {
  return (
    <>
      <Menu />
        {children }
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}