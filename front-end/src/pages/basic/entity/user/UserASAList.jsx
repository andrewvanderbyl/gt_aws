import { Divider, Grid, Paper, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "asa",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "REGISTRATION NUMBER",
    width: 250,
    flex: 1,
  },
  {
    field: "asaDate",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "DATE",
    width: 150,
    flex: 1,
  },
];

const rows = [
  { id: 1, asa: "123456", asaDate: "01-01-2024" },
  { id: 1, asa: "654321", asaDate: "01-01-2024" },
  { id: 1, asa: "987654", asaDate: "01-01-2024" },
  { id: 1, asa: "456789", asaDate: "01-01-2024" },
  { id: 1, asa: "111111", asaDate: "01-01-2024" },
  { id: 1, asa: "222222", asaDate: "01-01-2024" },
  { id: 1, asa: "333333", asaDate: "01-01-2024" },
  { id: 1, asa: "444444", asaDate: "01-01-2024" },
  { id: 1, asa: "555555", asaDate: "01-01-2024" },
];

export default function UserASAList() {
  return (
    <Grid item xs={12} sx={{ mt: 2 }}>
      <Paper
        square={false}
        elevation={3}
        sx={{ p: 2, display: "flex", flexDirection: "column", height: "75vh" }}
      >
        <Typography variant="h6">REGISTRATIONS:</Typography>
        <Divider sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }} />
        <DataGrid
          sx={{
            // width: '100%',
            "& .super-app-theme--header": {
              backgroundColor: "#1976d2",
              color: "white",
            },
          }}
          // sx={ {backgroundColor: '#1976d2'}}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Paper>
    </Grid>
  );
}
