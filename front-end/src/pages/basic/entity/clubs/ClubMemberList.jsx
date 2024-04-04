import EditIcon from "@mui/icons-material/Edit";
import { Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useClub } from "../../../util/hooks/clubHook";

const columns = [
  {
    field: "firstName",
    headerName: "FIRST NAME",
    width: 70,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "SURNAME",
    width: 70,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "email",
    headerName: "EMAIL",
    width: 130,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "contact",
    headerName: "CONTACT",
    width: 100,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
];

export default function ClubMemberList(props) {
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

      const newRows = await clubHook.fetchClubMembers(
        props.clubId,
        {
          page: paginationModel.page,
          size: paginationModel.pageSize,
        },
        props.userId
      );
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
        sx={{ p: 2, display: "flex", flexDirection: "column", height: "83vh" }}
      >
        <Typography variant="h6">MEMBERS:</Typography>
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
        />
      </Paper>
    </Grid>
  );
}
