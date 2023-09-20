import { useContext } from 'react'

import { UserContext } from '../../context/userContext'

import { useReports } from '../../hooks/useReports'

import { Layout } from '../../components/Layout'
import { LineChart } from '../../components/LineChart'
import { TimeFilter } from '../../components/TimeFilter'

import { Container, Content, WrapperRow, Card } from './styles'
import { Empty } from '../../components/Empty'

export const Reports = () => {
  const { user } = useContext(UserContext)
  const { cnpj, cpf } = user?.data || undefined

  const { reports, residues, fetchReportsWithInterval } = useReports({ cnpj, cpf})
  const { total_records, total_weight } = reports || 0

  return (
    <Layout>
      <Container>
        <Content>
          <h1>Relatórios</h1>
          <TimeFilter onFetch={fetchReportsWithInterval}/>
          <WrapperRow>
            <Card>
              <div>Total de coletas realizadas</div>
              <div><h2>{total_records}</h2></div>
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
                  <div><h2>{residue.name}</h2></div>
                  <div>Número de coletas realizadas</div>
                  <div><h2>{residue.count+ ``}</h2></div>
                  <div>Total de resíduos coletados</div>
                  <div><h2>{residue.total_weight ? residue.total_weight : '-'}</h2></div>
                 </Card>
              )
            })}
          </WrapperRow>
          <h2>Estatísticas</h2>
          { residues?.length > 0 ? <LineChart data={residues} /> : <Empty /> }
        </Content>
      </Container>
    </Layout>
  )
}