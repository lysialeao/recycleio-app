
import { useContext, useState } from 'react'

import { Button } from 'primereact/button'
import { Dropdown } from 'primereact/dropdown'

import { Layout } from '../../components/Layout'
import { WasteContext } from '../../context/useWaste'
import { WasteTable } from '../../components/WasteTable'

import { Container, Bar } from './styles'


export const WasteManager = () => {
  const { wastes, addWaste } = useContext(WasteContext)
  const [ wasteSelected, setWasteSelected ] = useState('')
  return (
    <Layout>
      <Container>
        <Bar >
          <Dropdown
            value={wasteSelected}
            onChange={(e) => setWasteSelected (e.value)}
            options={wastes}
            optionLabel="name"
            placeholder="Selecione um novo resíduo para coletar"
            className="w-full md:w-14rem"
            name={'name'}
          />
          <Button
            label={'Adicionar resíduo'}
            icon="pi pi-fw pi-search-plus"
            iconPos="right"
            severity="success"
            width='auto'
            onClick={() => addWaste({ waste: wasteSelected })}
          />
        </Bar>
        <WasteTable />
      </Container>
    </Layout>
  )
}
