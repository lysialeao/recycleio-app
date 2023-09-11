import { useState, useEffect } from 'react'

import { toast } from 'react-hot-toast'

import { getCollectionPointByCnpj } from '../services/collectionPoints'


export const useCollectionPoint = ({ cnpj }) => {

  const [point, setPoint] = useState({})
  const [loading, setLoading] = useState(false)

  const getCollectionPoint = async ({ cnpj }) => {
    await getCollectionPointByCnpj({ cnpj })
      .then(({ data }) => setPoint(data.collectionPoint))
      .catch((error) =>  toast.error(error.message))
  }

  useEffect(() => {
    cnpj && getCollectionPoint({ cnpj })
  }, [])

  const values = {
    point,
    setPoint,
    loading,
    setLoading,
    getCollectionPoint
  }

  return values
}
