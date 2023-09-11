import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import { Button } from 'primereact/button'
import { Tag } from 'primereact/tag'

import { Container, Header, Informations, WrapperTags } from './styles'

export const CollectionPoint = ({
  cnpj,
  corporate_name,
  trade_name,
  collection_days,
  telephone,
  email,
  wastes
}) => {
  const navigate = useNavigate()

  return (
    <Container>
      <Header />
      <Informations>
        <h3>{corporate_name} • {trade_name}</h3>
        <p><b>Dias de funcionamento: </b>{collection_days}</p>
        <p><b>Contato:</b>{telephone} • {email}</p>
        <WrapperTags>

        {
          wastes?.map((waste, index) => {
            return <Tag key={index} severity="success" value={waste.name} />
          })
        }
        </WrapperTags>
      </Informations>
      <Button label='Visualizar +' iconPos="right" severity="warning" onClick={() => navigate(`/collection-point/${cnpj}`, '_blank')} />
    </Container>
  )
}

CollectionPoint.propTypes = {
  cnpj: PropTypes.string,
  corporate_name: PropTypes.string,
  trade_name: PropTypes.string,
  collection_days: PropTypes.string,
  telephone: PropTypes.string,
  email: PropTypes.string,
  wastes: PropTypes.array
}