import { LoginForm } from '../../components/LoginForm'

import { Layout } from '../../components/Layout'

import { Container, ImageContent, Content  } from './styles'
import { useUser } from '../../hooks/useUser'

export const Login = () => {

  const { handleOnChange, onSubmit } = useUser()

  return(
    <Layout>
      <Container>
          <ImageContent />
        <Content>
          <h1>Olá novamente</h1>
          <LoginForm onChange={handleOnChange} onSubmit={onSubmit}/>
        </Content>
      </Container>
    </Layout>
  )
}

