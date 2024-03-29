import { useState, useEffect, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import { toast } from 'react-hot-toast'

import { UserContext } from './userContext'

import { getWasteByCollectionPoint, getAllWaste, insertWaste, updateWasteStatus} from '../services/waste'
import { SUCCESS } from '../constants/success'

export const WasteContext = createContext()

export const WasteProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)
  const [wastes, setWastes] = useState([])
  const [userWastes, setUserWastes] = useState([])
  const [userWastesFormatted, setUserWastesFormatted] = useState([])
  const [allWastes, setAllWastes] = useState([])

  const { user } = useContext(UserContext)

  const getWasteByPoint = async () => {
    setLoading(true)
    await getWasteByCollectionPoint({ collection_point_id: user?.data?.cnpj })
      .then(({ data }) => {
        setUserWastes(data?.wasteByCollectionPoint)
        getAll({ userWastes: data?.wasteByCollectionPoint})
        })
      .catch(({ error }) => toast.error(error || 'Houve um erro. Tente novamente'))
      .finally(setLoading(false))
  }

  const filterWates = ({ wastes, userWastes }) => {
    if ( userWastes.length >= 1) {
      const wasteIds = new Set(userWastes.map(item => item.waste_id));
      const result= wastes.filter(item => !wasteIds.has(item.id));
      return setWastes(result)
    } 
    else {
      return setWastes(wastes)
      }
  }


  const getAll = async ({ userWastes }) => {
    setLoading(true)
    await getAllWaste()
      .then(({ data }) => filterWates({ wastes:data?.waste, userWastes }))
      .catch(({ error }) => toast.error(error))
      .finally(setLoading(false))
  }

  const addWaste = async ({ waste }) => {
    setLoading(true)
    await insertWaste({ collection_point_id: user?.data.cnpj, waste_id: waste?.id })
      .then(() => {
        toast.success(SUCCESS.INSERTED_WASTE)
        getWasteByPoint()
      })
      .catch(({ error }) => toast.error(error))
      .finally(() => {
        setLoading(false)
      })
  }

  const updateWaste = async ({ waste_id, collection_point_id, status }) => {
    await updateWasteStatus({ collection_point_id, waste_id, status})
      .then(() => {
        toast.success(SUCCESS.UPDATED_WASTE_STATUS)
        getWasteByPoint()
      })
      .catch(({ error }) => toast.error(error))
      .finally(() => {
        setLoading(false)
      })
  }

  const getAllWastes = async () => {
    setLoading(true)
    await getAllWaste()
      .then(({ data }) => setAllWastes(data?.waste))
      .catch(({ error }) => toast.error(error))
      .finally(setLoading(false))
  }

  const values = {
    loading,
    wastes,
    userWastes,
    userWastesFormatted,
    addWaste,
    updateWaste,
    allWastes,
    getAllWastes
  }

   useEffect(() => {
    getWasteByPoint()
  }, [])

  useEffect(() => {
    getWasteByPoint()
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