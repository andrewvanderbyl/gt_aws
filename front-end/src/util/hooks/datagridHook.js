import { DataGrid, gridClasses } from "@mui/x-data-grid";
import { useState } from "react";
import { useLoader } from "./loaderHook";
import useStyles from "./useStyles";
import { alpha } from "@mui/material";

export const useDataGrid = () => {
  const [pageState, setPageState] = useState({
    total: 0,
    data: [],
  });
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 10,
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
        sx={{
          boxShadow: 5,
          border: 3,
          borderColor: "primary.dark",
          [`& .${gridClasses.row}.even`]: {
            backgroundColor: "#b3e5fc",
            "&:hover": {
              backgroundColor: "#e0e0e0",
              // "@media (hover: none)": {
              //   backgroundColor: "transparent",
              // },
            },
          },
          [`& .${gridClasses.row}.odd`]: {
            backgroundColor: "white",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
          },
        }}
        rows={pageState.data}
        columns={props.columns}
        rowCount={pageState.total}
        disableRowSelectionOnClick
        paginationMode="server"
        paginationModel={paginationModel}
        pageSizeOptions={[10]}
        keepNonExistentRowsSelected
        getRowId={(row) => row.id}
        onPaginationModelChange={setPaginationModel}
        pagination
        localeText={{
          noRowsLabel: `${props.emptyText}`,
        }}
        rowHeight={43}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
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
