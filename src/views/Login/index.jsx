import { LoginForm } from '../../components/LoginForm'

import { Layout } from '../../components/Layout'

import { Container, ImageContent, Content  } from './styles'

export const Login = () => {

  return(
    <Layout>
      <Container>
          {/* <ImageContent /> */}
        <Content>
          <h1>Olá novamente</h1>
          <LoginForm/>
        </Content>
      </Container>
    </Layout>
  )
}

