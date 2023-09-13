import { useContext } from 'react'

import { UserContext } from '../../context/userContext'

import { useReports } from '../../hooks/useReports'

import { Layout } from '../../components/Layout'
import { LineChart } from '../../components/LineChart'

import { Container, Content, WrapperRow, Card } from './styles'


export const Reports = () => {
  const { user } = useContext(UserContext)
  const { cnpj } = user?.data || undefined

  const { reports, residues } = useReports({ id: cnpj })
  const { total_records, total_weight } = reports || 0

  return (
    <Layout>
      <Container>
        <Content>
          <h1>Relatórios</h1>
          <WrapperRow>
            <Card>
              <div>Total de coletas realizadas</div>
              <div><h2>{total_records+` Kg `}</h2></div>
            </Card>
            <Card>
              <div>Total de resíudos coletados (em kg)</div>
              <div><h2>{total_weight+` Kg `}</h2></div>
            </Card>
          </WrapperRow>
          <h2>Resíduos coletados</h2>
          <WrapperRow>
            { residues && residues.map((residue, index) => {
              return (
                <Card key={index}>
                  <div>{residue.name}</div>
                  <div><h2>{residue.count+ ``}</h2></div>
                 </Card>
              )
            })}

          </WrapperRow>
          <h2>Estatícticas</h2>
          { residues && <LineChart data={residues}/> }
        </Content>
      </Container>
    </Layout>
  )
}