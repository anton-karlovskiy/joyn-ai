
import React from 'react';
import clsx from 'clsx';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';

import './joyn-ag-grid-react.scss';

const JoynAgGridReact = ({
  className,
  style,
  rowData,
  onGridReady,
  rowSelection,
  groupSelectsChildren,
  autoGroupColumnDef,
  children,
  ...rest
}) => {
  return (
    <div
      style={style}
      className={clsx('ag-theme-alpine', className)}>
      <AgGridReact
        {...rest}
        onGridReady={onGridReady}
        rowData={rowData}
        rowSelection={rowSelection}
        groupSelectsChildren={groupSelectsChildren}
        autoGroupColumnDef={autoGroupColumnDef}>
        {children}
      </AgGridReact>
    </div>
  );
};

export {
  AgGridColumn as JoynAgGridColumn
};

export default JoynAgGridReact;
