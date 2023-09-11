import PropTypes from 'prop-types'
import { Button } from 'primereact/button'

import { LocationFilter } from '../LocationFilter'
import { ResidueFilter } from '../ResidueFilter'

import { FORM } from '../../constants/form'

import { Container, Wrapper } from './styles'

export const SearchBar = ({ onSubmit }) => {
  return (
    <Container onSubmit={onSubmit}>
        <ResidueFilter />
      <Wrapper>
        {/* <LocationFilter /> */}
        <Button label={FORM.FIND_POINTS} icon="pi pi-fw pi-search-plus" iconPos="right" severity="success" />
      </Wrapper>
    </Container>
  )
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func
}