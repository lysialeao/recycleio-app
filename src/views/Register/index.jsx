import PropTypes from 'prop-types'

import { TabView, TabPanel } from 'primereact/tabview'
import { Toast } from 'primereact/toast';

import { Layout } from '../../components/Layout'

import { USERS } from '../../constants/user'

import { RegisterFormUser } from '../../components/RegisterFormUser'
import { RegisterFormCollectionPoint } from '../../components/RegisterFormCollectionPoint'
import { useRegister } from '../../hooks/useRegister'

import { Container } from './styles'

export const Register = () => {

  const { onChange, onSubmit, data, toast } = useRegister()
  return (
    <Layout>
      <Container>
        <Toast ref={toast} />
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
