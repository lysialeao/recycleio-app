import { useContext } from 'react'

import { InputText } from 'primereact/inputtext'

import { Layout } from '../../components/Layout'
import { UserContext } from '../../context/userContext'

import { PROFILE } from '../../constants/profile'

import { Container, Content, Header, Avatar, Information, Row } from './styles'

export const Profile = () => {
  const { user } = useContext(UserContext)
  const { first_name, last_name, email, corporate_name, trade_name } = user?.data || {}
  const { zip_code, state, city, neighborhood, street, number } = user?.address || {}
  return (
    <Layout>
      <Container>
        <Content>
          <Header />
          <Avatar />
          <Information>
            <h3>{PROFILE.DATA_INFORMATION}</h3>
            <Row>
              {first_name &&  <InputText value={first_name} disabled/>}
              {last_name && <InputText value={last_name} disabled/>}
              {corporate_name && <InputText value={corporate_name} disabled/>}
              {trade_name && <InputText value={trade_name} disabled/>}
              {email && <InputText value={email} disabled/>}
            </Row>
            <h3>{PROFILE.ADDRESS_INFORMATION}</h3>
            <Row>
              {zip_code && <InputText value={zip_code} disabled/>}
              {state && <InputText value={state} disabled/>}
              {city && <InputText value={city} disabled/>}
            </Row>
            <Row>
              {neighborhood && <InputText value={neighborhood} disabled/>}
              {street && <InputText value={street} disabled/>}
              {number && <InputText value={number} disabled/>}
            </Row>
          </Information>
        </Content>
      </Container>
    </Layout>
  )
}