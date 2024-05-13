import { useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";

import { FORM } from "../../constants/form";

import { Layout } from "../../components/Layout";

import { useCollectionPoint } from "../../hooks/useCollectionPoint";

import { CollectionContext } from "../../context/useCollection";
import { UserContext } from "../../context/userContext";

import {
  Container,
  Header,
  Wrapper,
  Content,
  ProfilePoint,
  WrapperCards,
  Card,
} from "./styles";
import { REPORTS_INFOS } from "../../constants/reports-infos";

export const ScheduleCollection = () => {
  const { id } = useParams();
  const { point } = useCollectionPoint({ cnpj: id });
  const { handleOnScheduleCollection } = useContext(CollectionContext);
  const { user } = useContext(UserContext);

  const [day, setDay] = useState();
  const [residues, setResidues] = useState();

  const residuess = point[0]?.waste_details?.map((waste) => {
    return {
      name: waste.name,
      code: waste.id,
    };
  });

  const { trade_name, address_details, collection_days } = point[0] || "";
  const { street, city } = address_details || "";

  const messageDays = `Recebendo coletas nos dias: ${collection_days}`;

  return (
    <Layout>
      <Container>
        <Header />
        <Content>
          <ProfilePoint>
            <h1>{trade_name}</h1>
            <h2>
              A {trade_name} está localizada em {street}, {city}{" "}
            </h2>
            <h2>{messageDays}</h2>
          </ProfilePoint>
          <Wrapper>
            <h2>Resíduos coletados</h2>
            <WrapperCards>
              {residuess?.map((residue) => (
                <Tag severity="success" value={residue.name} />
              ))}
            </WrapperCards>
          </Wrapper>

          <Wrapper>
            <MultiSelect
              value={residues}
              onChange={(event) => setResidues(event.value)}
              options={residuess}
              optionLabel="name"
              display="chip"
              placeholder={FORM.SELECT_RESIDUES}
              maxSelectedLabels={1}
              className="w-full md:w-20rem"
            />
            <Calendar value={day} onChange={(e) => setDay(e.value)} showIcon />
            <Button
              label={FORM.SCHEDULE_COLLECTION}
              severity="warning"
              onClick={() =>
                handleOnScheduleCollection({
                  day,
                  residues,
                  cnpj: id,
                  cpf: user?.data?.cpf,
                })
              }
              disabled={!user?.login}
              tooltip="É preciso estar logado para agendar uma coleta"
              tooltipOptions={{ position: "bottom", showOnDisabled: true }}
            />
          </Wrapper>
        </Content>
      </Container>
    </Layout>
  );
};
