import { Divider, Grid, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useClub } from "../../../util/hooks/clubHook";

const columns = [
  {
    field: "name",
    headerName: "NAME",
    width: 70,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "email",
    headerName: "EMAIL",
    width: 70,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "contact",
    headerName: "CONTACT",
    width: 70,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "province",
    headerName: "PROVINCE",
    width: 130,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "country",
    headerName: "COUNTRY",
    width: 130,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
];

export default function ClubList({ forceRefresh }) {
  const [pageState, setPageState] = useState({
    total: 0,
    data: [],
    isLoading: false,
  });
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 8,
  });
  const clubHook = useClub();

  useEffect(() => {
    (async () => {
      setPageState((old) => ({ ...old, isLoading: true }));
      console.log("Loading list");

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
  }, [paginationModel.page, paginationModel.pageSize, forceRefresh]);

  return (
    <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
      <Paper
        elevation={3}
        square={false}
        sx={{ p: 3, display: "flex", flexDirection: "column", height: "83vh" }}
      >
        <Typography variant="h6">CLUBS:</Typography>
        <Divider sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }} />

        <DataGrid
          sx={{
            // width: '100%',
            "& .super-app-theme--header": {
              backgroundColor: "#1C4E80",
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
              "No Card(s) currently exist. Please create Club or contact support",
          }}
          rowHeight={43}
        />
      </Paper>
    </Grid>
  );
}
