import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useResult } from "../../../../util/hooks/resultsHook";

export default function UserRaceList() {
  const raceHook = useResult();
  const dataGrid = useDataGrid();

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

  useEffect(() => {
    (async () => {
      dataGrid.showLoader();

      const raceResponse = await raceHook.fetchRacesList({
        page: dataGrid.getPageNumber(),
        size: dataGrid.getPageSize(),
      });
      dataGrid.updatePageState(raceResponse.data);
      dataGrid.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize()]);

  return (
    <>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
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
          <dataGrid.DataGridPanel
            columns={columns}
            emptyText={
              "You haven't participated in any race(s) yet. Get active"
            }
          />
        </Paper>
      </Grid>
    </>
  );
}
