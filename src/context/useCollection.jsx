import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'

import { getAllCollectionPoints, getCollectionPointsByZipCode } from '../services/collectionPoints'
import { getWasteByCollectionPoint } from '../services/waste'
import { postCollection } from '../services/collection'
import { toast } from 'react-hot-toast'

export const CollectionContext = createContext()

export const CollectionProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)
  const [points, setPoints] = useState([])
  const [location, setLocation] = useState('')
  const [visible, setVisible] = useState(false)

  const getWastesByPoints = async (point) => {
    const cnpj = point?.cnpj
    await getWasteByCollectionPoint({ collection_point_id: cnpj })
      .then(({ data }) =>
        setPoints([
          {
            ...point,
            wastes: data?.wasteByCollectionPoint
          }
        ])
      )
      .catch((error) => console.error(error))
      .finally(setLoading(false))
  }

  const getCollectionPoints = async () => {
    setLoading(true)
    await getAllCollectionPoints()
      .then(({ data }) => data?.collectionPoints.map((point) => getWastesByPoints(point)))
      .catch((error) => console.error(error))
      .finally(setLoading(false))
  }

  const getCollectionPointsZipCode = async ({ location }) => {
    setLoading(true)
    await getCollectionPointsByZipCode({ zip_code: location })
      .then(({ data }) => setPoints(data?.collectionPoints))
      .catch((error) => console.error(error))
      .finally(setLoading(false))
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    getCollectionPointsZipCode({ location })
  }

  const handleOnScheduleCollection = async({ day, residues, cnpj, cpf, user_name, weight, status }) => {
    event.preventDefault()
    setLoading(true)

    const residuesToCollection = residues.map((residue) => {
      return residue.code
    })

    await postCollection({
        user_id: cpf,
        collection_point_id: cnpj,
        date_time: day,
        waste_id: residuesToCollection,
        user_name, 
        weight,
        status
      })
      .then(toast.success('Coleta agendada!'))
      .catch((error) => console.error(error))
      .finally(setLoading(false))
  }

  useEffect(() => {
    getCollectionPoints()
  }, [])

  const values = {
    loading,
    setLoading,
    points,
    setPoints,
    location,
    setLocation,
    handleOnSubmit,
    handleOnScheduleCollection,
    visible,
    setVisible
  }

  return (
    <CollectionContext.Provider value={values}>
      {children}
    </CollectionContext.Provider>
  )
}

CollectionProvider.propTypes = {
  children: PropTypes.node
}