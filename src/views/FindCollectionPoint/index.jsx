import { Layout } from "../../components/Layout"
import { ListCollectionPoints } from '../../components/ListCollectionPoints/index'
import { Container } from "./styles"

export const FindCollectionPoint = () => {

  return (
    <Layout>
      <Container>
        <ListCollectionPoints />
      </Container>
    </Layout>
  )
}