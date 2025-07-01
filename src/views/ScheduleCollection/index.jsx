import { useState, useContext } from "react";
import { useParams, NavLink } from "react-router-dom";

import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

import { Dropdown } from "primereact/dropdown";

import { Calendar } from "primereact/calendar";
import { addLocale } from "primereact/api";

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
  GoBack,
} from "./styles";

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

  const {
    trade_name,
    address_details,
    collection_days,
    collection_responsible_name,
  } = point[0] || "";

  const { street, city } = address_details || "";

  const messageDays = `Recebendo coletas nos dias: ${collection_days}`;

  const tooltipMessage = () => {
    if (!user.login) return "É preciso estar logado para agendar uma coleta";
    if (user.data.cnpj)
      return "Pontos coletores não podem agendar coletas em outros pontos.";
  };

  addLocale("pt-BR", {
    firstDayOfWeek: 1,
    showMonthAfterYear: true,
    dayNames: [
      "domingo",
      "segunda",
      "terça",
      "quarta",
      "quinta",
      "sexta",
      "sábado",
    ],
    dayNamesShort: ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"],
    dayNamesMin: ["D", "S", "T", "Q", "Q", "S", "S"],
    monthNames: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ],
    monthNamesShort: [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ],
    today: "Hoje",
    clear: "Limpar",
    am: "Manhã",
    pm: "Tarde",
  });

  const isDisabled = !user?.login || user.data.cnpj || !(residues && day);

  return (
    <Layout>
      <Container>
        <Header>
          <GoBack>
            <NavLink to="/find-collection-point">
              <h2>⬅ Voltar para listagem</h2>
            </NavLink>
          </GoBack>
        </Header>
        <Content>
          <ProfilePoint>
            <h1>{trade_name}</h1>
            <h2>
              A {trade_name} está localizada em {street}, {city}{" "}
            </h2>
            <h2>{messageDays}</h2>
            <h2>
              Quem vai te atender será {collection_responsible_name},
              responsável pelas coletas
            </h2>
            <div>
              <WrapperCards>
                <h2>Resíduos coletados:</h2>
                {residuess?.map((residue, index) => (
                  <Tag key={index} severity="success" value={residue.name} />
                ))}
              </WrapperCards>
            </div>
          </ProfilePoint>

          <Wrapper>
            <Dropdown
              value={residues}
              onChange={(event) => setResidues(event.value)}
              options={residuess}
              optionLabel="name"
              display="chip"
              placeholder={FORM.SELECT_RESIDUES}
              maxSelectedLabels={1}
              className="w-full"
            />
            <Calendar
              value={day}
              onChange={(e) => setDay(e.value)}
              showIcon
              minDate={new Date()}
              showTime
              hourFormat="12"
              locale="pt-BR"
            />
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
              disabled={isDisabled}
              tooltip={tooltipMessage()}
              tooltipOptions={{ position: "bottom", showOnDisabled: true }}
            />
          </Wrapper>
        </Content>
      </Container>
    </Layout>
  );
};
