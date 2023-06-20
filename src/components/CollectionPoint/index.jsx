import PropTypes from 'prop-types'

import { Container, Header, Informations } from './styles'

export const CollectionPoint = ({
  corporate_name,
  trade_name,
  collection_days,
  telephone,
  email
}) => {
  return (
    <Container>
      <Header />
      <Informations>
        <h3>{corporate_name} • {trade_name}</h3>
        <p><b>Dias de funcionamento: </b>{collection_days}</p>
        <p><b>Contato:</b>{telephone} • {email}</p>
      </Informations>
    </Container>
  )
}

CollectionPoint.propTypes = {
  corporate_name: PropTypes.string,
  trade_name: PropTypes.string,
  collection_days: PropTypes.string,
  telephone: PropTypes.string,
  email: PropTypes.string
}