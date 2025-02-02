import { useContext, useRef, useState, useCallback } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";
import { Layout } from "../../components/Layout";

import { UserContext } from "../../context/userContext";
import { CollectionContext } from "../../context/useCollection";
import { useCollection } from "../../hooks/useCollection";
import { useCollectionPoint } from "../../hooks/useCollectionPoint";

import { Container, Form, Wrapper } from "./styles";
import { optionsStatus, collectionStatus } from "../../enum/status";
import { updateCollection } from "../../services/collection";

export const CollectionManeger = () => {
  const { user } = useContext(UserContext);

  const { cnpj, cpf } = user?.data || undefined;

  const { collections, setUpdate } = useCollection({ cnpj, cpf });
  const { point } = useCollectionPoint({ cnpj });
  const { handleOnScheduleCollection } = useContext(CollectionContext);

  const residuess = point[0]?.waste_details?.map((waste) => {
    return {
      name: waste.name,
      code: waste.id,
    };
  });

  const [status, setStatus] = useState("");
  const [weight, setWeight] = useState("");
  const [displayDialog, setDisplayDialog] = useState(false);
  const [modal, setModal] = useState(false);

  const [newCollection, setNewCollection] = useState({
    client: null,
    date: null,
    status: null,
    waste: [],
    weight: null,
  });

  const toast = useRef(null);
  const modalRef = useRef(null);
  const tempId = useRef(null);

  const accept = useCallback(() => {
    updateCollection({ id: tempId.current, weight, status: status.code })
      .then(() => {
        toast.current.show({
          severity: "info",
          summary: "Sucesso",
          detail: "Coleta atualizada!",
          life: 3000,
        });
        setUpdate(true);
        setDisplayDialog(false);
        setStatus("");
        setWeight("");
      })
      .catch((error) => {
        console.error(error);
        reject();
      });
  }, [weight, status]);

  const reject = useCallback(() => {
    toast.current.show({
      severity: "warn",
      summary: "Algo deu errado",
      detail: "Vamos tentar novamente?",
      life: 3000,
    });
    return setDisplayDialog(false);
  }, []);

  const cancel = useCallback(() => {
    toast.current.show({
      severity: "warn",
      summary: "Ação cancelada",
      detail: "Você pode acessar as coletas quando quiser!",
      life: 3000,
    });
    setDisplayDialog(false);
    setModal(false);
  }, []);

  const renderFooter = useCallback(() => {
    return (
      <div>
        <Button
          label="Cancelar"
          severity="secondary"
          icon="pi pi-times"
          onClick={cancel}
          className="p-button-text"
        />
        <Button
          label="Atualizar coleta"
          severity="success"
          icon="pi pi-check"
          disabled={
            !["Cancelado", "Agendado"].includes(status.name) && weight === null
          }
          onClick={accept}
          autoFocus
        />
      </div>
    );
  }, [accept, reject]);

  const openDialog = useCallback((dataRow) => {
    tempId.current = dataRow.id;
    setDisplayDialog(true);
  }, []);

  const openModal = useCallback((dataRow) => {
    tempId.current = dataRow.id;
    setModal(true);
  }, []);

  const renderButton = (rowData) => {
    return (
      <Button
        onClick={() => openDialog(rowData)}
        icon="pi pi-check"
        label={collectionStatus[rowData.collection_status]}
        className="mr-2"
        severity="success"
        disabled={rowData.collection_status === "COMPLETED" ? true : false}
      />
    );
  };

  const acceptNewCollection = useCallback(() => {
    const { date, status, waste, weight, client } = newCollection;

    handleOnScheduleCollection({
      day: date,
      residues: waste,
      cnpj,
      weight,
      user_name: client,
      status: status.code,
    })
      .then(() => {
        toast.current.show({
          severity: "info",
          summary: "Sucesso",
          detail: "Coleta atualizada!",
          life: 3000,
        });
        setUpdate(true);
        setModal(false);
        setNewCollection({
          client: "",
          date: "",
          status: null,
          waste: [],
          weight: 0,
        });
      })
      .catch((error) => {
        console.error(error);
        reject();
      });
  });
  const isButtonDisabled = () => {
    if (
      newCollection.client === null ||
      newCollection.date === null ||
      newCollection.status === null ||
      (!["Cancelado", "Agendado"].includes(newCollection.status.name) &&
        newCollection.weight === null)
    ) {
      return true;
    }
    return false;
  };

  const renderFooterNewCollection = useCallback(() => {
    return (
      <div>
        <Button
          label="Cancelar"
          severity="secondary"
          icon="pi pi-times"
          onClick={cancel}
          className="p-button-text"
        />
        <Button
          label="Inserir coleta"
          severity="success"
          icon="pi pi-check"
          disabled={isButtonDisabled()}
          onClick={acceptNewCollection}
          autoFocus
        />
      </div>
    );
  }, [acceptNewCollection, reject]);

  return (
    <Layout>
      <Container>
        <Toast ref={toast} />
        <Toast ref={modalRef} />
        {cnpj && (
          <Wrapper>
            <Button
              onClick={() => openModal({ id: 1 })}
              // icon="pi pi-check"
              label={"Adicionar nova coleta"}
              className="mr-2"
              severity="success"
              disabled={false}
            />
          </Wrapper>
        )}
        <DataTable
          value={collections}
          editMode="row"
          dataKey={"id"}
          onRowEditComplete={() => {}}
          tableStyle={{ minWidth: "50rem" }}
        >
          {cnpj && (
            <Column
              field={({ user_info, user_name }) =>
                user_info?.name ? user_info.name : user_name
              }
              header="Cliente"
            ></Column>
          )}
          {cpf && <Column field="trade_name" header="Ponto coletor"></Column>}
          <Column field="date_time" header="Dia"></Column>
          <Column field="waste_name" header="Resíduo"></Column>
          <Column field="weight" header="Peso em kg"></Column>
          {cpf && (
            <Column
              field={(data) => collectionStatus[data.collection_status]}
              header="Status"
            >
              {" "}
            </Column>
          )}
          {cnpj && (
            <Column
              field="collection_status"
              header="Status"
              body={renderButton}
            ></Column>
          )}
        </DataTable>
        <Dialog
          header="Insira os dados da coleta, por favor"
          visible={displayDialog}
          style={{ width: "50vw" }}
          footer={renderFooter()}
          onHide={() => setDisplayDialog(false)}
        >
          <Form>
            <label htmlFor="status">Status da coleta</label>
            <Dropdown
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              options={optionsStatus}
              optionLabel="name"
              placeholder="Selecione o status"
              className="w-full md:w-14rem"
              required
            />
            <label htmlFor="username">Peso</label>
            <InputNumber
              id="weight"
              aria-describedby="username-help"
              value={weight}
              onValueChange={(e) => setWeight(e.value)}
              required
              mode="decimal"
              minFractionDigits={2}
              maxFractionDigits={5}
              decimalSeparator="."
              thousandSeparator=","
            />
            <small id="username-help">
              Digite o peso total dos resíduos que foram coletados.
            </small>
          </Form>
        </Dialog>
        {/* Dialog for new collection */}
        <Dialog
          header="Insira os dados da coleta, por favor"
          visible={modal}
          style={{ width: "50vw" }}
          footer={renderFooterNewCollection()}
          onHide={() => setModal(false)}
        >
          <Form>
            <label htmlFor="client">Cliente</label>
            <InputText
              id="client"
              aria-describedby="client-help"
              value={newCollection.client}
              onChange={(e) =>
                setNewCollection((curr) => ({
                  ...curr,
                  client: e.target.value,
                }))
              }
            />
            <label htmlFor="date">Data</label>
            <Calendar
              value={newCollection.date}
              onChange={(e) =>
                setNewCollection((curr) => ({
                  ...curr,
                  date: e.target.value,
                }))
              }
              showIcon
            />
            <label htmlFor="status">Status</label>
            <Dropdown
              id="status"
              value={newCollection.status}
              onChange={(e) =>
                setNewCollection({
                  ...newCollection,
                  status: e.target.value,
                })
              }
              options={optionsStatus}
              optionLabel="name"
              placeholder="Selecione o status"
              className="w-full md:w-14rem"
            />
            <label htmlFor="waste">Resíduo</label>
            <Dropdown
              value={newCollection.waste}
              options={residuess}
              onChange={(e) =>
                setNewCollection({
                  ...newCollection,
                  waste: e.value,
                })
              }
              optionLabel="name"
              display="chip"
              placeholder={"Selecione o resíduo"}
              maxSelectedLabels={1}
              className="w-full md:w-20rem"
            />
            <label htmlFor="weight">Peso</label>
            <InputNumber
              id="weight"
              value={newCollection.weight}
              onChange={(e) =>
                setNewCollection({
                  ...newCollection,
                  weight: e.value,
                })
              }
              mode="decimal"
              minFractionDigits={2}
              maxFractionDigits={5}
              decimalSeparator="."
              thousandSeparator=","
            />
            <small id="weight-help">
              Digite o peso total dos resíduos que foram coletados.
            </small>
          </Form>
        </Dialog>
      </Container>
    </Layout>
  );
};
