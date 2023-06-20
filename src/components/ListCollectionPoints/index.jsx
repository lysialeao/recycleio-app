import { useEffect, useState } from 'react'

import { Skeleton } from 'primereact/skeleton';

import { getAllCollectionPoints } from '../../services/collectionPoints'
import { CollectionPoint } from '../CollectionPoint'

import { SearchBar } from '../SearchBar'

import { Container, Content } from './styles'

export const ListCollectionPoints = () => {
  const [points, setPoints] = useState([])
  const [loading, setLoading] = useState(false)

  const getCollectionPoints = async () => {
    setLoading(true)
    await getAllCollectionPoints()
      .then(({ data }) => setPoints(data?.collectionPoints))
      .catch((error) => console.error(error))
      .finally(setLoading(false))
  }

  const shouldRenderList = () => {
    if(loading) {
      return (
        <>
        <Skeleton width="100%" height="300px" />
        <Skeleton width="100%" height="300px" />
        <Skeleton width="100%" height="300px" />
        <Skeleton width="100%" height="300px" />
        <Skeleton width="100%" height="300px" />
        </>
      )
    }else{
      return points.map((point, index) => {
        return <CollectionPoint
          key={index}
          corporate_name={point.corporate_name}
          trade_name={point.trade_name}
          collection_days={point.collection_days}
          telephone={point.telephone}
          email={point.email}
          />
      })
    }

  }

  useEffect(() => {
    getCollectionPoints()
  }, [])

  return (
    <Container>
      <SearchBar />
      <Content>
        {shouldRenderList()}
      </Content>
    </Container>
  )
}