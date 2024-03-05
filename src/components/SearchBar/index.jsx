import PropTypes from 'prop-types'
import { Button } from 'primereact/button'

import { ResidueFilter } from '../ResidueFilter'

import { FORM } from '../../constants/form'

import { Container, Wrapper } from './styles'
import { useContext } from 'react'
import { CollectionContext } from '../../context/useCollection'

export const SearchBar = ({ onSubmit }) => {
  const { wastesFilter } = useContext(CollectionContext)
  return (
    <Container onSubmit={onSubmit}>
        <ResidueFilter />
      <Wrapper>
        <Button
          label={FORM.FIND_POINTS} 
          icon="pi pi-fw pi-search-plus" 
          iconPos="right" 
          severity="success" 
          disabled={!(wastesFilter.length > 0)}
        />
      </Wrapper>
    </Container>
  )
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func
}