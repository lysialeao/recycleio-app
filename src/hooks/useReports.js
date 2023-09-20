import { useState, useEffect } from 'react'

import { toast } from 'react-hot-toast'

import { getAllReport, getReportsWithInterval, getReportsWithIntervalUser, getAllReportUser } from '../services/reports'

export const useReports = ({ cnpj, cpf }) => {

  const [reports, setReports] = useState(null)
  const [residues, setResidues] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchReportsWithInterval = async ({ init, end }) => {

    setLoading(true)

    const initFormated = new Date(init)
    const endFormated = new Date(end)

    if(cnpj) {
      await getReportsWithInterval({ id: cnpj, init: initFormated.toISOString(), end: endFormated.toISOString() })
        .then(({ data }) => {
          setReports(data.reports[0])
          setResidues(data.residues)
        })
        .catch((error) => toast.error(error.message || 'Houve um erro'))
        .finally(setLoading(false))
    }else {
      await getReportsWithIntervalUser({ id: cpf, init: initFormated.toISOString(), end: endFormated.toISOString() })
        .then(({ data }) => {
          setReports(data.reports[0])
          setResidues(data.residues)
        })
        .catch((error) => toast.error(error.message || 'Houve um erro'))
        .finally(setLoading(false))
    }

  }

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

  const fetchReportsUser = async ({ id }) => {
    setLoading(true)
    await getAllReportUser({ id })
      .then(({ data }) => {
        setReports(data.reports[0])
        setResidues(data.residues)
      })
      .catch((error) => toast.error(error.message || 'Houve um erro'))
      .finally(setLoading(false))
  }

  useEffect(() => {
    cnpj && fetchReports({ id: cnpj })
    cpf && fetchReportsUser({ id: cpf})
  }, [cnpj, cpf])

  return {
    loading,
    reports,
    residues,
    fetchReportsWithInterval
  }
}