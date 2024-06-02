import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { useLoader } from "./loaderHook";
import useStyles from "./useStyles";

export const useDataGrid = () => {
  const [pageState, setPageState] = useState({
    total: 0,
    data: [],
  });
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 8,
  });
  const loader = useLoader();
  const classes = useStyles();

  const updatePageState = (newRows) => {
    setPageState((old) => ({
      ...old,
      data: newRows.data,
      total: newRows.count,
    }));
  };

  const showLoader = () => {
    loader.showLoader();
  };

  const closeLoader = () => {
    loader.closeLoader();
  };

  const getPageNumber = () => paginationModel.page;
  const getPageSize = () => paginationModel.pageSize;

  const DataGridPanel = (props) => (
    <>
      <loader.LoadingPanel />
      <DataGrid
        className={classes.dataGrid}
        rows={pageState.data}
        columns={props.columns}
        rowCount={pageState.total}
        disableRowSelectionOnClick
        paginationMode="server"
        paginationModel={paginationModel}
        pageSizeOptions={[8]}
        keepNonExistentRowsSelected
        getRowId={(row) => row.id}
        onPaginationModelChange={setPaginationModel}
        pagination
        localeText={{
          noRowsLabel: `${props.emptyText}`,
        }}
        rowHeight={43}
      />
    </>
  );

  return {
    DataGridPanel,
    updatePageState,
    getPageNumber,
    getPageSize,
    showLoader,
    closeLoader,
  };
};
