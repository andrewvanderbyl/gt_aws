import { Divider, Grid, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../util/context/AuthUserContext";
import { useLoader } from "../../../../util/hooks/loaderHook";
import { useResult } from "../../../../util/hooks/resultsHook";

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
  const loader = useLoader();

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
      field: "timing",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      headerName: "TIMING",
      flex: 1,
    },
  ];

  const authHook = useAuth();
  const loggedInUser = authHook.localStorageValue;

  const raceHook = useResult();
  useEffect(() => {
    (async () => {
      loader.showLoader();
      setPageState((old) => ({ ...old, isLoading: true }));

      const newRows = await raceHook.fetchRacesList(
        {
          page: paginationModel.page,
          size: paginationModel.pageSize,
        },
        loggedInUser.id
      );
      setPageState((old) => ({
        ...old,
        isLoading: false,
        data: newRows.data,
        total: newRows.count,
      }));
      loader.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationModel.page, paginationModel.pageSize]);

  return (
    <>
      <loader.LoadingPanel />

      <Grid item xs={12} sx={{ mt: 2 }}>
        <Paper
          elevation={3}
          square={false}
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "83vh",
          }}
        >
          <Typography variant="h6">RACES:</Typography>
          <Divider
            sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }}
          />
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
            disableRowSelectionOnClick
            paginationMode="server"
            paginationModel={paginationModel}
            pageSizeOptions={[8]}
            keepNonExistentRowsSelected
            getRowId={(row) => row.raceId}
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
    </>
  );
}
