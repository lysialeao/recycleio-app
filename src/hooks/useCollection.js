import { useEffect, useState } from "react"

import { getCollectionsByCnpj, getCollectionsByCpf } from "../services/collection"
import { formatDate } from "../utils/date"
// import { formatStatusCollection } from '../utils/formatStatus'

export const useCollection = ({ cnpj, cpf }) => {

  const [loading, setLoading] = useState(false)
  const [collections, setCollections] = useState([])
  const [update, setUpdate] = useState(false)

  const formatCollections = ({ collections }) => {
    const formated = collections.map((collection) => ({
      ...collection,
      date_time: formatDate({ date: collection.date_time })
    }))

    return setCollections(formated)

  }

  const getCollections = async ({ cnpj, cpf }) => {
    setLoading(true);

    try {
        let data;
        if (cnpj) {
            data = await getCollectionsByCnpj({ id: cnpj });
        } else if (cpf) {
            data = await getCollectionsByCpf({ id: cpf });
        } else {
            throw new Error('Both CNPJ and CPF are missing.');
        }

        formatCollections({ collections: data.data.collections });

    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
        setUpdate(false)
    }
}


  useEffect(() => {
    getCollections({ cnpj, cpf })
  }, [cnpj, cpf, update])

  return {
    loading,
    collections,
    setUpdate
  }
}