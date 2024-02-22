import { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import { DataTable } from 'primereact/datatable'
import { Dropdown } from 'primereact/dropdown'
import { Column } from 'primereact/column'
import { Tag } from 'primereact/tag'

import { WasteContext } from '../../context/useWaste'

export const WasteTable = () => {
  const [ status ] = useState(['ACTIVE', 'INACTIVE'])
  const { userWastes, updateWaste } = useContext(WasteContext)

  const getSeverity = (value) => {
    switch (value) {
        case 'ACTIVE':
            return 'success'

        case 'INACTIVE':
            return 'danger'

        default:
            return null
    }
  }

  const statusEditor = (options) => {
    return (
        <Dropdown
            value={options.value}
            options={status}
            onChange={(e) => options.editorCallback(e.value)}
            placeholder="Secione o status"
            itemTemplate={(option) => {
                return <Tag value={option} severity={getSeverity(option)}></Tag>;
            }}
        />
    );
  };

  const statusBodyTemplate = (rowData) => {
    return <Tag value={rowData.status} severity={getSeverity(rowData.status)}></Tag>
  }

  return (
    <DataTable value={userWastes} editMode="row" dataKey="id" onRowEditComplete={({ newData}) => {
      updateWaste({ collection_point_id: newData.collection_point_id, status: newData.status, waste_id: newData.waste_id})
    }} tableStyle={{ minWidth: '50rem' }}>
      <Column field="name" header="Resíduo"></Column>
      <Column field="status" header="Status" body={statusBodyTemplate} editor={(options) => statusEditor(options)} style={{ width: '20%' }}></Column>
      <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
    </DataTable>
    )
}

WasteTable.propTypes = {
  wastes: PropTypes.array
}