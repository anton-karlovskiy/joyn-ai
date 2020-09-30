
import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import ToolbarActions from 'parts/ToolbarActions';
import JoynAgGridReact, { JoynAgGridColumn } from 'components/JoynAgGridReact';
import JoynAgGridToolbar from 'components/JoynAgGridReact/JoynAgGridToolbar';
import JoynSearchBar from 'components/JoynSearchBar';
import JoynButton from 'components/JoynButton';
import ButtonLink from 'components/UI/ButtonLink';
import ActionsRenderer from './ActionsRenderer';
import { ReactComponent as PlusIcon } from 'assets/icons/svgs/plus.svg';
import { PAGINATION_PAGE_SIZE } from 'config/ag-grid';
import PAYLOAD_KEYS from 'utils/constants/payload-keys';
import BUTTON_TYPES from 'utils/constants/button-types';
import { data } from 'utils/dummies/picklist-options';
import { PAGES } from 'utils/constants/links';
import { GENERICS } from 'utils/constants//common';

const RENDERER_NAMES = {
  ACTIONS_RENDERER: 'actions-renderer'
};

const columnDefinitions = [
  {
    headerName: 'Name',
    field: PAYLOAD_KEYS.NAME
  },
  {
    headerName: 'Code',
    field: PAYLOAD_KEYS.CODE
  },
  {
    headerName: 'Description',
    field: PAYLOAD_KEYS.DESCRIPTION
  },
  {
    headerName: 'Value',
    field: PAYLOAD_KEYS.VALUE
  },
  {
    headerName: 'Sort Order',
    field: PAYLOAD_KEYS.SORT_ORDER
  },
  {
    headerName: 'IsActive',
    field: PAYLOAD_KEYS.IS_ACTIVE
  },
  {
    headerName: 'Customizable',
    field: PAYLOAD_KEYS.CUSTOMIZABLE
  },
  {
    headerName: 'Parent Picklist',
    field: PAYLOAD_KEYS.PARENT_PICKLIST_ID_NAME
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
    headerName: 'Actions',
    field: PAYLOAD_KEYS.ID,
    sortable: false,
    cellRenderer: RENDERER_NAMES.ACTIONS_RENDERER
  },
  // MEMO: Invisible but reserved data
  {
    headerName: 'ID',
    field: PAYLOAD_KEYS.ID,
    hide: true
  },
  {
    headerName: 'Picklist Options Set ID',
    field: PAYLOAD_KEYS.PICKLIST_OPTIONS_SET_ID,
    hide: true
  },
  {
    headerName: 'Parent Picklist Options Set ID',
    field: PAYLOAD_KEYS.PARENT_PICKLIST_OPTIONS_SET_ID,
    hide: true
  },
  {
    headerName: 'Parent Picklist Options Set Name',
    field: PAYLOAD_KEYS.PARENT_PICKLIST_OPTIONS_SET_NAME,
    hide: true
  },
  {
    headerName: 'Parent Picklist Options ID',
    field: PAYLOAD_KEYS.PARENT_PICKLIST_OPTION_ID,
    hide: true
  },
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
    headerName: 'Modified by',
    field: PAYLOAD_KEYS.MODIFIED_BY,
    hide: true
  },
  {
    headerName: 'Created by Name',
    field: PAYLOAD_KEYS.CREATED_BY_NAME,
    hide: true
  }
];

const GenericPicklistOptionsTable = () => {
  const { [GENERICS.ID]: picklistId } = useParams();
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
      <JoynAgGridToolbar
        leftPart={
          <Typography variant='subtitle4'>
            Picklist options for County
          </Typography>
        }
        rightPart={
          <ToolbarActions>
            <JoynSearchBar
              value={searchTerm}
              onChange={handleSearchTermChange} />
            <ButtonLink href={PAGES.PICKLISTS_GENERICS_ADD_OPTION.replace(`:${GENERICS.ID}`, picklistId)}>
              <JoynButton
                type={BUTTON_TYPES.PRIMARY}
                startIcon={<PlusIcon />}>
                Add Options
              </JoynButton>
            </ButtonLink>
          </ToolbarActions>
        } />
      <JoynAgGridReact
        style={{
          height: '300px'
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

export default GenericPicklistOptionsTable;
