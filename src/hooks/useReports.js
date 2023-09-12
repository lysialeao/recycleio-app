import { useState, useEffect } from 'react'

import { toast } from 'react-hot-toast'

import { getAllReport } from '../services/reports'

export const useReports = ({ id }) => {

  const [reports, setReports] = useState(null)
  const [residues, setResidues] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchReports = async ({ id }) => {
    setLoading(true)
    await getAllReport({ id })
      .then(({ data }) => {
        setReports(data.reports[0])
        setResidues(data.residues)
      })
      .catch((error) => toast.error(error.message || 'Houve um erro'))
      .finally(setLoading(false))
  }

  useEffect(() => {
    id && fetchReports({ id })
  }, [id])

  return {
    loading,
    reports,
    residues
  }
}