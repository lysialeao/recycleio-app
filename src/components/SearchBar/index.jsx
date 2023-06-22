import { Button } from 'primereact/button'

import { LocationFilter } from '../LocationFilter'
import { ResidueFilter } from '../ResidueFilter'

import { FORM } from '../../constants/form'

import { Container, Wrapper } from './styles'

export const SearchBar = () => {
  return (
    <Container>
        <ResidueFilter />
      <Wrapper>
        <LocationFilter />
        <Button label={FORM.FIND_POINTS} icon="pi pi-fw pi-search-plus" iconPos="right" severity="success" />
      </Wrapper>
    </Container>
  )
}