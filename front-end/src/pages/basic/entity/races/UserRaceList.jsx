import { Divider, Grid, Paper, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";

export default function UserRaceList() {
  const [pageState, setPageState] = useState({
    total: 0,
    data: [],
    isLoading: false,
  });
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 8,
  });

  const columns = [
    {
      field: "name",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      headerName: "RACE",
      flex: 1,
    },
    {
      field: "date",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      headerName: "DATE",
      flex: 1,
    },
    {
      field: "cost",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      headerName: "COST",
      type: "number",
      flex: 1,
    },
    {
      field: "position",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      headerName: "POSITION",
      flex: 1,
    },
    {
      field: "time",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      headerName: "TIMING",
      flex: 1,
    },
  ];

  return (
    <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
      <Paper
        elevation={3}
        square={false}
        sx={{ p: 3, display: "flex", flexDirection: "column", height: "83vh" }}
      >
        <Typography variant="h6">RACES:</Typography>
        <Divider sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }} />
        <DataGrid
          sx={{
            "& .super-app-theme--header": {
              backgroundColor: "#1C4E80",
              color: "white",
            },
          }}
          rows={pageState.data}
          columns={columns}
          rowCount={pageState.total}
          paginationMode="server"
          paginationModel={paginationModel}
          pageSizeOptions={[8]}
          keepNonExistentRowsSelected
          getRowId={(row) => row.id}
          onPaginationModelChange={setPaginationModel}
          pagination
          localeText={{
            noRowsLabel:
              "You haven't participated in any race(s) yet. Get active",
          }}
          rowHeight={43}
        />
      </Paper>
    </Grid>
  );
}
