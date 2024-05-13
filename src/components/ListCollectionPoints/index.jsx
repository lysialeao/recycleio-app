import { useContext } from "react";

import { Skeleton } from "primereact/skeleton";

import { CollectionContext } from "../../context/useCollection";

import { CollectionPoint } from "../CollectionPoint";

import { SearchBar } from "../SearchBar";
import { Empty } from "../Empty";

import { Container, Content } from "./styles";

export const ListCollectionPoints = () => {
  const { loading, points, handleOnSubmit } = useContext(CollectionContext);

  const shouldRenderList = () => {
    if (loading) {
      return (
        <>
          <Skeleton width="100%" height="300px" />
          <Skeleton width="100%" height="300px" />
          <Skeleton width="100%" height="300px" />
          <Skeleton width="100%" height="300px" />
          <Skeleton width="100%" height="300px" />
        </>
      );
    }
    if (points?.length <= 0) return <Empty />;
    if (points?.length >= 1) {
      return (
        <Content>
          {points?.map((point, index) => {
            return (
              <CollectionPoint
                key={index}
                cnpj={point.cnpj}
                corporate_name={point.corporate_name}
                trade_name={point.trade_name}
                collection_days={point.collection_days}
                telephone={point.telephone}
                email={point.email}
                wastes={point.wastes}
              />
            );
          })}
        </Content>
      );
    }
  };

  return (
    <Container>
      <SearchBar onSubmit={(event) => handleOnSubmit(event)} />
      {shouldRenderList()}
    </Container>
  );
};
