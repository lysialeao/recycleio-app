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

import { Container, Header, Wrapper } from "./styles"

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

  return (
    <Layout>
      <Container>
        <Header />
        <Wrapper>
          <p>Rápido e fácil, agende sua coleta agora</p>
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
        </Wrapper>
        <Button
          label={FORM.SCHEDULE_COLLECTION}
          severity='warning'
          onClick={() => handleOnScheduleCollection({ day, residues, cnpj: id, cpf: user?.data?.cpf})}
          disabled={!user?.login}
        />
      </Container>
    </Layout>
  )
}