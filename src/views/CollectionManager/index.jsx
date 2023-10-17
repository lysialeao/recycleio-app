import { useContext, useRef, useState, useCallback } from "react"
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext'
import { DataTable } from 'primereact/datatable'
import { Dropdown } from 'primereact/dropdown';
import { Button } from "primereact/button"
import { Column } from 'primereact/column'
import { Toast } from 'primereact/toast';


import { Layout } from "../../components/Layout"

import { UserContext } from "../../context/userContext"
import { useCollection } from "../../hooks/useCollection"

import { Container, Form } from "./styles"
import { optionsStatus, collectionStatus } from "../../enum/status";
import { updateCollection } from "../../services/collection";

export const CollectionManeger = () => {
  const { user } = useContext(UserContext)

  const { cnpj, cpf } = user?.data || undefined

  const { collections, setUpdate } = useCollection({ cnpj, cpf })

  const [status, setStatus] = useState('')
  const [weight, setWeight] = useState('')
  const [displayDialog, setDisplayDialog] = useState(false);

  const toast = useRef(null);
  const tempId = useRef(null);

  const accept = useCallback(() => {
    updateCollection({ id: tempId.current, weight, status: status.code })
      .then(() => {
        toast.current.show({ severity: 'info', summary: 'Sucesso', detail: 'Coleta atualizada!', life: 3000 });
        setUpdate(true)
        setDisplayDialog(false);
      })
      .catch(error => {
        console.error(error);
        reject()
      });
  }, [weight, status]);

  const reject = useCallback(() => {
    toast.current.show({ severity: 'warn', summary: 'Algo deu errado', detail: 'Vamos tentar novamente?', life: 3000 });
    setDisplayDialog(false);
  }, []);

  const cancel = useCallback(() => {
    toast.current.show({ severity: 'warn', summary: 'Ação cancelada', detail: 'Você pode atualizar esta coleta quando quiser!', life: 3000 });
    setDisplayDialog(false);
  }, []);


  const renderFooter = useCallback(() => {
    return (
      <div>
        <Button label="Cancelar" severity="secondary" icon="pi pi-times" onClick={cancel} className="p-button-text" />
        <Button label="Atualizar coleta" severity="success" icon="pi pi-check" onClick={accept} autoFocus />
      </div>
    );
  }, [accept, reject]);


  const openDialog = useCallback((dataRow) => {
    tempId.current = dataRow.id;
    setDisplayDialog(true);
}, []);

  const renderButton = (rowData) => {
    return <Button 
      onClick={() => openDialog(rowData)} 
      icon="pi pi-check" 
      label={collectionStatus[rowData.collection_status]} 
      className="mr-2" 
      severity="success"
      disabled={rowData.collection_status==='COMPLETED' ? true : false} 
    />
  };

  return (
    <Layout>
      <Container>
        <Toast ref={toast} />
        <DataTable value={collections} editMode="row" dataKey={'id'} onRowEditComplete={() => { }} tableStyle={{ minWidth: '50rem' }}>
          {cnpj && <Column field="user_info.name" header="Cliente"></Column>}
          {cpf && <Column field="trade_name" header="Ponto coletor"></Column>}
          <Column field='date_time' header="Dia"></Column>
          <Column field='waste_name' header="Resíduo"></Column>
          <Column field='weight' header="Peso em kg"></Column>
          { cpf && <Column field={(data) => collectionStatus[data.collection_status]} header='Status'> </Column>}
          {cnpj && <Column field='collection_status' header='Status' body={renderButton}></Column> }
        </DataTable>
        <Dialog header="Insira os dados da coleta, por favor" visible={displayDialog} style={{ width: '50vw' }} footer={renderFooter()} onHide={() => setDisplayDialog(false)}>
          <Form>
            <label htmlFor="status">Status da coleta</label>
            <Dropdown id='status' value={status} onChange={(e) => setStatus(e.value)} options={optionsStatus} optionLabel="name" placeholder="Selecione o status" className="w-full md:w-14rem" />
            <label htmlFor="username">Peso</label>
            <InputText id="username" aria-describedby="username-help" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <small id="username-help">
              Digite o peso total dos resíduos que foram coletados.
            </small>
          </Form>
        </Dialog>
      </Container>
    </Layout>
  )
}