
import React from 'react';

import JoynAgGridReact, { JoynAgGridColumn } from 'components/JoynAgGridReact';
import ThreeDotMenu from 'components/ThreeDotMenu';
import { JoynMenuItem } from 'components/UI/JoynMenu';
import JoynAgGridHeader from 'components/JoynAgGridReact/JoynAgGridHeader';
import JoynSearchBar from 'components/JoynSearchBar';
import DownloadIconButton from 'components/JoynIconButtons/DownloadIconButton';
import { ReactComponent as EditIcon } from 'assets/icons/svgs/edit.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/svgs/plus.svg';
import PAYLOAD_KEYS from 'utils/constants/payload-keys';
import { data } from 'utils/dummies/picklist-options-set';
import { PAGINATION_PAGE_SIZE } from 'config/ag-grid';

const RENDERER_NAMES = {
  ACTIONS_RENDERER: 'actions-renderer'
};

const columnDefinitions = [
  {
    headerName: 'Picklist Name',
    field: PAYLOAD_KEYS.NAME
  },
  {
    headerName: 'Display Name',
    field: PAYLOAD_KEYS.DISPLAY_NAME
  },
  {
    headerName: 'Customizable',
    field: PAYLOAD_KEYS.CUSTOMIZABLE
  },
  {
    headerName: 'Parent Picklist',
    field: PAYLOAD_KEYS.PARENT_PICKLIST_OPTIONS_SET_NAME
  },
  {
    headerName: 'Modified on',
    field: PAYLOAD_KEYS.MODIFIED_ON
  },
  {
    headerName: 'Modified by',
    field: PAYLOAD_KEYS.MODIFIED_BY_NAME
  },
  {
    headerName: 'ID',
    field: PAYLOAD_KEYS.ID
  },
  {
    headerName: 'Actions',
    field: 'id',
    sortable: false,
    cellRenderer: RENDERER_NAMES.ACTIONS_RENDERER
  },
  // MEMO: Invisible but reserved data
  {
    headerName: 'Created by',
    field: PAYLOAD_KEYS.CREATED_BY,
    hide: true
  },
  {
    headerName: 'Created on',
    field: PAYLOAD_KEYS.CREATED_ON,
    hide: true
  },
  {
    headerName: 'Parent Picklist Option Set ID',
    field: PAYLOAD_KEYS.PARENT_PICKLIST_OPTIONS_SET_ID,
    hide: true
  },
  {
    headerName: 'Created by Name',
    field: PAYLOAD_KEYS.CREATED_BY_NAME,
    hide: true
  },
  {
    headerName: 'Modified by',
    field: PAYLOAD_KEYS.MODIFIED_BY,
    hide: true
  },
  {
    headerName: 'UUID',
    field: 'UUID',
    hide: true
  }
];

const ActionsRenderer = props => {
  return (
    <ThreeDotMenu id={props.value}>
      <JoynMenuItem
        icon={<EditIcon />}
        text='Edit' />
      <JoynMenuItem
        icon={<PlusIcon />}
        text='Add Picklist Option' />
    </ThreeDotMenu>
  );
};

const GenericPicklists = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  // const [gridApi, setGridApi] = React.useState(null);
  // const [gridColumnApi, setGridColumnApi] = React.useState(null);
  const [rowData, setRowData] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      // TODO: get the data from the backend
      const newRowData = data.Result || [];
      setRowData(newRowData);
    })();
  }, []);

  const onGridReady = params => {
    // setGridApi(params.api);
    // setGridColumnApi(params.columnApi);
  };

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <JoynAgGridHeader
        leftPart={
          <JoynSearchBar
            value={searchTerm}
            onChange={handleSearchTermChange} />
        }
        rightPart={<DownloadIconButton />} />
      <JoynAgGridReact
        style={{
          height: '600px'
        }}
        frameworkComponents={{
          [RENDERER_NAMES.ACTIONS_RENDERER]: ActionsRenderer
        }}
        rowData={rowData}
        onGridReady={onGridReady}
        defaultColDef={{
          sortable: true,
          flex: 1
        }}
        pagination
        paginationPageSize={PAGINATION_PAGE_SIZE}
        quickFilterText={searchTerm}>
        {columnDefinitions.map(columnDefinition => (
          <JoynAgGridColumn
            key={columnDefinition.headerName}
            {...columnDefinition} />
        ))}
      </JoynAgGridReact>
    </>
  );
};

export default GenericPicklists;
