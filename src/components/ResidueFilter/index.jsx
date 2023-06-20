import { useState } from 'react'

import { MultiSelect } from 'primereact/multiselect'

import { Container } from './styles'

export const ResidueFilter = () => {
  const [residues, setResidues] = useState([])

  const cities = [
    { name: 'Papel', code: 'paper' },
    { name: 'Plástico', code: 'plastic' },
    { name: 'Vidro', code: 'glass' },
    { name: 'Metal', code: 'metal' }
  ]

  return (
    <Container>
      <MultiSelect
        value={residues}
        onChange={(e) => setResidues(e.value)}
        options={cities}
        optionLabel="name"
        display="chip"
        placeholder="Selecione o que deseja descartar"
        maxSelectedLabels={3}
        className="w-full md:w-20rem"
      />
    </Container>
  )
}