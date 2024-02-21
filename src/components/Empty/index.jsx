import { ERRORS } from '../../constants/errors'

import EmptyImg from '../../assets/empty.webp'
import { Container, EmptyImage } from './styles'


export const Empty = () => {
  return (
    <Container>
      <EmptyImage src={EmptyImg}/>
      {ERRORS.NOT_FOUND}
    </Container>
  )
}