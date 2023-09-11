import PropTypes from 'prop-types'

import { TabView, TabPanel } from 'primereact/tabview'

import { Layout } from '../../components/Layout'
import { Container } from './styles'

import { USERS } from '../../constants/user'

import { RegisterFormUser } from '../../components/RegisterFormUser'
import { RegisterFormCollectionPoint } from '../../components/RegisterFormCollectionPoint'
import { useRegister } from '../../hooks/useRegister'

export const Register = () => {

  const { onChange, onSubmit, data } = useRegister()
  return (
    <Layout>
      <Container>
        <TabView>
          <TabPanel header={USERS.COLLECTION_POINT}>
            <RegisterFormCollectionPoint />
          </TabPanel>
          <TabPanel header={USERS.USER}>
            <RegisterFormUser onChange={onChange} onSubmit={onSubmit} data={data}/>
          </TabPanel>
        </TabView>
      </Container>
    </Layout>
  )
}
