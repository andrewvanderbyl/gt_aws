import { Divider, Grid, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useClub } from "../../../util/hooks/clubHook";
import { useEffect, useState } from "react";

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

export default function ClubList() {
  const clubHook = useClub();
  const [clubList, setClubList] = useState([]);
  const [rows, setRows] = useState(0);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 6,
  });

  useEffect(() => {
    (async () => {
      const newRows = await clubHook.fetchClubList({
        page: 0,
        size: 6,
      });
      console.log(newRows);
      setClubList(newRows.data);
      setRows(newRows.pages);
      setPaginationModel({ page: newRows.page, pageSize: newRows.size });
    })();
  }, []);

  return (
    <Grid item xs={12} sx={{ mt: 2 }}>
      <Paper
        elevation={3}
        square={false}
        sx={{ p: 2, display: "flex", flexDirection: "column", height: "75vh" }}
      >
        <Typography variant="h6">CLUBS:</Typography>
        <Divider sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }} />

        <DataGrid
          sx={{
            // width: '100%',
            "& .super-app-theme--header": {
              backgroundColor: "#1976d2",
              color: "white",
            },
          }}
          rows={clubList}
          columns={columns}
          rowCount={rows}
          // paginationMode="server"
          paginationModel={paginationModel}
          pageSizeOptions={[6]}
          keepNonExistentRowsSelected
          getRowId={(row) => row.id}
          pagination
          // rowHeight={45}
        />
      </Paper>
    </Grid>
  );
}
