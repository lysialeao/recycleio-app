import PropTypes from 'prop-types';

import { Menu } from "../Menu"
import { Footer } from '../Footer';

import { Container } from './styles';
export const Layout = ({ children }) => {
  return (
    <>
    <Menu />
    <>
    <Container>
      {children}

    </Container>
    </>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}