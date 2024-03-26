import { Divider, Grid, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useClub } from "../../../../util/hooks/clubHook";
import TransferList from "../../../../components/TransferList";

const columns = [
  {
    field: "year",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "YEAR",
    width: 250,
    flex: 1,
  },
  {
    field: "asa",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "ASA NUMBER",
    width: 250,
    flex: 1,
  },
  {
    field: "tagid",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "TAG ID",
    width: 250,
    flex: 1,
  },
  {
    field: "asaDate",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "REGISTRATION DATE",
    width: 150,
    flex: 1,
  },
];

export default function TagList() {
  const [pageState, setPageState] = useState({
    total: 0,
    data: [],
    isLoading: false,
  });
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 6,
  });
  const clubHook = useClub();

  useEffect(() => {
    (async () => {
      setPageState((old) => ({ ...old, isLoading: true }));

      const newRows = await clubHook.fetchClubList({
        page: paginationModel.page,
        size: paginationModel.pageSize,
      });
      setPageState((old) => ({
        ...old,
        isLoading: false,
        data: newRows.data,
        total: newRows.count,
      }));
    })();
  }, [paginationModel.page, paginationModel.pageSize]);

  return (
    <Grid item xs={12} sx={{ mt: 2 }}>
      <Paper
        elevation={3}
        square={false}
        sx={{ p: 2, display: "flex", flexDirection: "column", height: "75vh" }}
      >
        <Typography variant="h6">TAGS:</Typography>
        <Divider sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }} />
        <DataGrid
          sx={{
            // width: '100%',
            "& .super-app-theme--header": {
              backgroundColor: "#1976d2",
              color: "white",
            },
          }}
          loading={pageState.isLoading}
          rows={pageState.data}
          columns={columns}
          rowCount={pageState.total}
          paginationMode="server"
          paginationModel={paginationModel}
          pageSizeOptions={[6]}
          keepNonExistentRowsSelected
          getRowId={(row) => row.id}
          onPaginationModelChange={setPaginationModel}
          pagination
          localeText={{
            noRowsLabel:
              "No Tag(s) currently exist. Please create a Tag or contact support",
          }}
          // rowHeight={45}
        />
      </Paper>
    </Grid>
  );
}
