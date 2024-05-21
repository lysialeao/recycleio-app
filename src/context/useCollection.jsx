import { useState, useEffect, createContext } from "react";
import PropTypes from "prop-types";

import {
  getAllCollectionPoints,
  getCollectionPointsFilter,
} from "../services/collectionPoints";
import { getWasteByCollectionPoint } from "../services/waste";
import { postCollection } from "../services/collection";
import { toast } from "react-hot-toast";

export const CollectionContext = createContext();

export const CollectionProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [points, setPoints] = useState([]);
  const [location, setLocation] = useState("");
  const [visible, setVisible] = useState(false);
  const [wastesFilter, setWastesFilter] = useState([]);

  const getCollectionPoints = async () => {
    setLoading(true);
    await getAllCollectionPoints()
      .then(({ data }) => setPoints(data?.collectionPoints))
      .catch((error) => console.error(error))
      .finally(setLoading(false));
  };

  const getCollectionPointsByWastes = async ({ wastes }) => {
    setLoading(true);
    await getCollectionPointsFilter({ wastes })
      .then(({ data }) => setPoints(data?.collectionPoints))
      .catch((error) => toast.error(error))
      .finally(setLoading(false));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const wastes = wastesFilter.map((waste) => `${waste.id}`);
    getCollectionPointsByWastes({ wastes });
  };

  const handleOnScheduleCollection = async ({
    day,
    residues,
    cnpj,
    cpf,
    user_name,
    weight,
    status,
  }) => {
    event.preventDefault();
    setLoading(true);

    const residuesToCollection = residues.code;

    await postCollection({
      user_id: cpf,
      collection_point_id: cnpj,
      date_time: day,
      waste_id: residuesToCollection,
      user_name,
      weight,
      status,
    })
      .then(toast.success("Coleta agendada!"))
      .catch((error) => console.error(error))
      .finally(setLoading(false));
  };

  useEffect(() => {
    getCollectionPoints();
  }, []);

  useEffect(() => {
    if (wastesFilter.length === 0) getCollectionPoints();
  }, [wastesFilter]);

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
    setVisible,
    wastesFilter,
    setWastesFilter,
  };

  return (
    <CollectionContext.Provider value={values}>
      {children}
    </CollectionContext.Provider>
  );
};

CollectionProvider.propTypes = {
  children: PropTypes.node,
};
