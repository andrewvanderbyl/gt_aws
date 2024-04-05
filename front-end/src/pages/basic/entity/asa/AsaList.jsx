import { Divider, Grid, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useClub } from "../../../../util/hooks/clubHook";
import { useLoader } from "../../../../util/hooks/loaderHook";

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

export default function AsaList({ forceRefresh }) {
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
  const loader = useLoader();

  useEffect(() => {
    (async () => {
      loader.showLoader();
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
      loader.closeLoader();
    })();
  }, [paginationModel.page, paginationModel.pageSize, forceRefresh]);

  return (
    <>
      <loader.LoadingPanel />
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <Paper
          elevation={3}
          square={false}
          sx={{
            p: 3,
            display: "flex",
            flexDirection: "column",
            height: "83vh",
          }}
        >
          <Typography variant="h6">CLUBS:</Typography>
          <Divider
            sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }}
          />

          <DataGrid
            sx={{
              // width: '100%',
              "& .super-app-theme--header": {
                backgroundColor: "#1C4E80",
                color: "white",
              },
            }}
            // loading={pageState.isLoading}
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
                "No Club(s) currently exist. Please create a Club or contact support",
            }}
            rowHeight={43}
          />
        </Paper>
      </Grid>
    </>
  );
}
