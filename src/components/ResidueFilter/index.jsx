import { useContext, useEffect, useState } from "react";

import { MultiSelect } from "primereact/multiselect";

import { Container } from "./styles";
import { WasteContext } from "../../context/useWaste";
import { CollectionContext } from "../../context/useCollection";

export const ResidueFilter = () => {
  const [residues, setResidues] = useState([]);

  const { getAllWastes, allWastes } = useContext(WasteContext);
  const { wastesFilter, setWastesFilter } = useContext(CollectionContext);

  useEffect(() => {
    getAllWastes();
  }, []);

  return (
    <Container>
      <MultiSelect
        value={wastesFilter}
        onChange={(e) => setWastesFilter(e.value)}
        options={allWastes}
        optionLabel="name"
        display="chip"
        placeholder="Selecione o que deseja descartar"
        maxSelectedLabels={3}
        className="w-full md:w-100rem"
      />
    </Container>
  );
};
