import { LocationFilter } from '../LocationFilter'
import { ResidueFilter } from '../ResidueFilter'

import { Container } from './styles'

export const SearchBar = () => {
  return (
    <Container>
      <ResidueFilter />
      <LocationFilter />
    </Container>
  )
}