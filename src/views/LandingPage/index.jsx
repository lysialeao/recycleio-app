import { Layout } from '../../components/Layout'

import { Container, Banner } from './styles'

export const LandingPage = () => {

  return(
    <Layout>
      <Container>
        {/* <img src='https://cdn.dribbble.com/userupload/2919966/file/original-2a080412ff0831144d09c7c7f0fa87b1.png?compress=1&resize=1024x767' width='100%' height='350px'/>
        <div><p>recycle.io</p></div> */}
        <Banner />
      </Container>
    </Layout>
  )
}

