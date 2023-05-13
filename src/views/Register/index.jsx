import { TabView, TabPanel } from 'primereact/tabview'

import { Layout } from '../../components/Layout'
import { Container } from './styles'

import { USERS } from '../../constants/user'

import { RegisterFormUser } from '../../components/RegisterFormUser'
import { RegisterFormCollectionPoint } from '../../components/RegisterFormCollectionPoint'

export const Register = () => {
  return (
    <Layout>
      <Container>
        <TabView>
          <TabPanel header={USERS.COLLECTION_POINT}>
            <RegisterFormCollectionPoint />
          </TabPanel>
          <TabPanel header={USERS.USER}>
            <RegisterFormUser />
          </TabPanel>
        </TabView>
      </Container>
    </Layout>
  )
}