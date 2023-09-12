import { useState, useContext } from 'react'
import * as d3 from 'd3'

import { UserContext } from '../../context/userContext'

import { useReports } from '../../hooks/useReports'

import { Layout } from '../../components/Layout'
import LinePlot from '../../components/LinePlot'

import { Container, Content, WrapperRow, Card } from './styles'


export const Reports = () => {
  const { user } = useContext(UserContext)
  const { cnpj } = user?.data || undefined

  const { reports, residues } = useReports({ id: cnpj })
  const { total_records, total_weight } = reports || 0
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin))

  function onMouseMove(event) {
    const [x, y] = d3.pointer(event);
    setData(data.slice(-200).concat(Math.atan2(x, y)));
  }

  return (
    <Layout  onMouseMove={onMouseMove}>
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
          <LinePlot data={data}/>
        </Content>
      </Container>
    </Layout>
  )
}