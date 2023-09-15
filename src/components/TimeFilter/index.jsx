import { useState } from 'react'
import PropTypes from 'prop-types'

import { Button } from 'primereact/button'
import { Calendar } from 'primereact/calendar'

import { Container } from './styles'

export const TimeFilter = ({ onFetch }) => {

  const [initDate, setInitDate] = useState('')
  const [endDate, setEndDate] = useState('')

  return (
    <Container>
      <Calendar value={initDate} onChange={(e) => setInitDate(e.value)} inputId='init_date' placeholder='Data de início'/>
      <Calendar value={endDate} onChange={(e) => setEndDate(e.value)} inputId='end_date' placeholder='Data final'/>
      <Button severity="success" label="Filtrar" onClick={() => onFetch({ init: initDate, end: endDate })}/>
    </Container>
  )
}

TimeFilter.propTypes = {
  onFetch: PropTypes.func
}