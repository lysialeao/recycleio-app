import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'

import { getAllCollectionPoints, getCollectionPointsByZipCode } from '../services/collectionPoints'

export const CollectionContext = createContext()

export const CollectionProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)
  const [points, setPoints] = useState([])
  const [location, setLocation] = useState('')

  const getCollectionPoints = async () => {
    setLoading(true)
    await getAllCollectionPoints()
      .then(({ data }) => setPoints(data?.collectionPoints))
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
    handleOnSubmit
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