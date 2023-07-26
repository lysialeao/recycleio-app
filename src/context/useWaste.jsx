import { useState, useEffect, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import { toast } from 'react-hot-toast'

import { UserContext } from './userContext'

import { getWasteByCollectionPoint, getAllWaste } from '../services/waste'

export const WasteContext = createContext()

export const WasteProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)
  const [wastes, setWastes] = useState([])
  const [userWastes, setUserWastes] = useState([])
  const [userWastesFormatted, setUserWastesFormatted] = useState([])

  const { user } = useContext(UserContext)
  const { cnpj } = user?.data || ''

  const UserWastes = () => {
    return userWastes.map(userWaste =>
      wastes.find(waste => userWaste.waste_id === waste.id));
  }

  const getWasteByPoint = async ({ collection_point_id }) => {
    setLoading(true)
    await getWasteByCollectionPoint({ collection_point_id })
      .then(({ data }) => setUserWastes(data?.wasteByCollectionPoint))
      .catch(({ error }) => toast.error(error || 'Houve um erro. Tente novamente'))
      .finally(setLoading(false))
  }

  const getAll = async () => {
    setLoading(true)
    await getAllWaste()
      .then(({ data }) => setWastes(data?.waste))
      .catch(({ error }) => toast.error(error))
      .finally(setLoading(false))
  }

  const values = {
    loading,
    wastes,
    userWastes,
    userWastesFormatted
  }

  useEffect(() => {
    getAll()
  }, [])

  useEffect(() => {
    getWasteByPoint({ collection_point_id: `${cnpj}` })
    const wastesFormatted = userWastes && wastes && UserWastes()
    setUserWastesFormatted(wastesFormatted)
  }, [user])

  return (
    <WasteContext.Provider value={values}>
      {children}
    </WasteContext.Provider>
  )

}

WasteProvider.propTypes = {
  children: PropTypes.node
}