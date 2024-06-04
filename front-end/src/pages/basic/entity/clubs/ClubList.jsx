import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import { useClub } from "../../../../util/hooks/clubHook";
import { useDataGrid } from "../../../../util/hooks/datagridHook";

export default function ClubList({ forceRefresh }) {
  const clubHook = useClub();
  const dataGrid = useDataGrid();

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

  useEffect(() => {
    (async () => {
      dataGrid.showLoader();

      const clubListResponse = await clubHook.fetchClubList({
        page: dataGrid.getPageNumber(),
        size: dataGrid.getPageSize(),
      });
      dataGrid.updatePageState(clubListResponse.data);
      dataGrid.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize(), forceRefresh]);

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
              "No Club(s) currently exist. Please create a Club or contact support"
            }
          />
        </Paper>
      </Grid>
    </>
  );
}
