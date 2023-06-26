import { Container, EmptyImage } from './styles'

import EmptyImg from '../../assets/empty.webp'

export const Empty = () => {
  return (
    <Container>
      <EmptyImage src={EmptyImg}/>
    </Container>
  )
}