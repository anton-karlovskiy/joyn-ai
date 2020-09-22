
import React from 'react';

import JoynAgGridReact, { JoynAgGridColumn } from 'components/JoynAgGridReact';

const Template = args => {
  const [gridApi, setGridApi] = React.useState(null);
  // const [gridColumnApi, setGridColumnApi] = React.useState(null);
  const [rowData, setRowData] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const results = await fetch(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/rowData.json'
      );
      const newRowData = await results.json();
      setRowData(newRowData);
    })();
  }, []);

  const onGridReady = params => {
    setGridApi(params.api);
    // setGridColumnApi(params.columnApi);
  };

  const handleButtonClick = event => {
    const selectedNodes = gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}>
        Get selected rows
      </button>
      <JoynAgGridReact
        {...args}
        rowData={rowData}
        onGridReady={onGridReady}>
        <JoynAgGridColumn
          sortable
          filter
          checkboxSelection
          field='make' />
        <JoynAgGridColumn
          sortable
          filter
          field='model' />
        <JoynAgGridColumn
          sortable
          filter
          field='price' />
      </JoynAgGridReact>
    </>
  );
};

const Default = Template.bind({});
Default.args = {
  style: {
    height: '200px',
    width: '600px',
    padding: '16px'
  },
  rowSelection: 'multiple',
  groupSelectsChildren: true,
  autoGroupColumnDef: {
    headerName: 'Model',
    field: 'model',
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true
    }
  }
};

export default {
  title: 'JoynAgGridReact',
  component: JoynAgGridReact
};

export {
  Default
};
