import * as d3 from "d3";
import { useState } from "react";

import { Layout } from "../../components/Layout"
import LinePlot from "../../components/LinePlot"
import { Container, Content, WrapperRow, Card } from "./styles"

export const Reports = () => {
  const [data, setData] = useState(() => d3.ticks(-2, 2, 200).map(Math.sin));

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
              <div><h2>56</h2></div>
            </Card>
            <Card>
              <div>Total de resíudos coletados (em kg)</div>
              <div><h2>36kg</h2></div>
            </Card>
          </WrapperRow>
          <h2>Resíduos coletados</h2>
          <WrapperRow>
          <Card>
              <div>Vidro</div>
              <div><h2>36kg</h2></div>
            </Card>
            <Card>
              <div>Papel</div>
              <div><h2>36kg</h2></div>
            </Card>
            <Card>
              <div>Plástico</div>
              <div><h2>36kg</h2></div>
            </Card>
          </WrapperRow>
          <h2>Estatícticas</h2>
          <LinePlot data={data}/>
        </Content>
      </Container>
    </Layout>
  )
}