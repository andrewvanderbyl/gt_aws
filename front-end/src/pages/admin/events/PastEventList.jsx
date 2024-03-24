import { Divider, Grid, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useClub } from "../../../util/hooks/clubHook";
import { useEvent } from "../../../util/hooks/eventHook";

const columns = [
  {
    field: "name",
    headerName: "NAME",
    width: 250,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    // flex: 1,
  },
  {
    field: "date",
    headerName: "DATE",
    width: 185,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    // flex: 1,
  },
  {
    field: "detail",
    headerName: "DETAIL",
    // width: 70,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
];

export default function PastEventList() {
  const [pageState, setPageState] = useState({
    total: 0,
    data: [],
    isLoading: false,
  });
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 6,
  });

  const eventHook = useEvent();

  useEffect(() => {
    (async () => {
      setPageState((old) => ({ ...old, isLoading: true }));

      const newRows = await eventHook.fetchEventList({
        eventType: "past",
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
        <Typography variant="h6">PAST EVENTS:</Typography>
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
              "No Event(s) currently exist. Please create an Event or contact support",
          }}
          // rowHeight={45}
        />
      </Paper>
    </Grid>
  );
}
