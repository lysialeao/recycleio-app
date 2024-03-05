import { useState, useContext } from "react";
import { useParams } from "react-router-dom"

import { Button } from 'primereact/button'
import { MultiSelect } from 'primereact/multiselect'
import { Calendar } from 'primereact/calendar'

import { FORM } from "../../constants/form";

import { Layout } from "../../components/Layout"

import { useCollectionPoint } from "../../hooks/useCollectionPoint"

import { CollectionContext } from "../../context/useCollection"
import { UserContext } from "../../context/userContext"

import { Container, Header, Wrapper, Content, ProfilePoint, WrapperCards, Card } from "./styles"
import { REPORTS_INFOS } from "../../constants/reports-infos";
import { DAYS } from "../../constants/days";

export const ScheduleCollection = () => {
  const { id } = useParams()
  const { point } = useCollectionPoint({ cnpj: id })
  const { handleOnScheduleCollection } = useContext(CollectionContext)
  const { user } = useContext(UserContext)

  const [day, setDay] = useState()
  const [residues, setResidues] = useState()

  const residuess = point[0]?.waste_details?.map((waste) => {
    return {
      name: waste.name,
      code: waste.id
    }
  })

  const { trade_name, address_details, collection_days }= point[0] || ''
  const { street, city } = address_details || ''

  const messageDays = collection_days?.lenght >= 1 ? `Recebendo coletas nos dia: ${DAYS[collection_days]}` : `Recebendo coletas no dia: ${DAYS[collection_days]}`

  return (
    <Layout>
      <Container>
        <Header /> 
        <Content>
          <ProfilePoint>
            <h1>{trade_name}</h1>
            <h2>A {trade_name} está localizada em {street}, {city} </h2>
            <h2>{messageDays}</h2>
          </ProfilePoint>
            <Wrapper>
            <h2>Resíduos coletados</h2>
          <WrapperCards>

           

            {residuess?.map((residue) => {
    if (residue.name === 'Plástico') {
        return (
            <Card>
                <img src={REPORTS_INFOS[0].icon} width='60px' height={'60px'} />
                <h1>{REPORTS_INFOS[0].residue}</h1>
            </Card>
        );
    } 
    if (residue.name === 'Vidro') {
      return (
        <Card>
            <img src={REPORTS_INFOS[3].icon} width='60px' height={'60px'} />
            <h1>{REPORTS_INFOS[3].residue}</h1>
        </Card>
    );

    }
    
    else {
        // Lógica para o caso em que a condição não é atendida
        return null; // ou outro elemento JSX, se necessário
    }
})}
          </WrapperCards>
 </Wrapper>

        <Wrapper>
          <MultiSelect
            value={residues}
            onChange={(event) => setResidues(event.value)}
            options={residuess}
            optionLabel="name"
            display="chip"
            placeholder={FORM.SELECT_RESIDUES}
            maxSelectedLabels={1}
            className="w-full md:w-20rem"
          />
          <Calendar
            value={day}
            onChange={(e) => setDay(e.value)}
            showIcon
          />
        <Button
          label={FORM.SCHEDULE_COLLECTION}
          severity='warning'
          onClick={() => handleOnScheduleCollection({ day, residues, cnpj: id, cpf: user?.data?.cpf})}
          disabled={!user?.login}
        />
        
        </Wrapper>
        </Content>
      </Container>
    </Layout>
  )
}