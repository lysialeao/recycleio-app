import { useState, useEffect, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import { toast } from 'react-hot-toast'

import { UserContext } from './userContext'

import { getWasteByCollectionPoint, getAllWaste, insertWaste} from '../services/waste'
import { SUCCESS } from '../constants/success'

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

  const formatWastes = ({ wastes }) => {

    setWastes(wastes)
    userWastes && console.log(userWastes)
  }

  const getAll = async () => {
    setLoading(true)
    await getAllWaste()
      .then(({ data }) => formatWastes({ wastes : data?.waste }))
      .catch(({ error }) => toast.error(error))
      .finally(setLoading(false))
  }

  const addWaste = async ({ waste }) => {
    setLoading(true)
    await insertWaste({ collection_point_id: user?.data.cnpj, waste_id: waste?.id })
      .then(() => {
        toast.success(SUCCESS.INSERTED_WASTE)
        userWastes.push(waste)
      })
      .catch(({ error }) => toast.error(error))
      .finally(() => {
        setLoading(false)
      })
  }

  const values = {
    loading,
    wastes,
    userWastes,
    userWastesFormatted,
    addWaste
  }

  useEffect(() => {
    getAll()
  }, [])

  useEffect(() => {
    getWasteByPoint({ collection_point_id: `${cnpj}` })
    const wastesFormatted = userWastes && wastes && UserWastes()
    setUserWastesFormatted(wastesFormatted)
  }, [])

  return (
    <WasteContext.Provider value={values}>
      {children}
    </WasteContext.Provider>
  )

}

WasteProvider.propTypes = {
  children: PropTypes.node
}