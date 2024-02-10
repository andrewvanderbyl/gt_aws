import EditIcon from "@mui/icons-material/Edit";
import { Divider, Grid, IconButton, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

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
    width: 100,
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
  },
  {
    field: "id",
    headerName: "ACTIONS",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    flex: 1,
    renderCell: (params) => (
      <IconButton color="primary" onClick={console.log(params)}>
        <EditIcon />
      </IconButton>
    ),
  },
];

const rows = [
  {
    id: 1,
    name: "SnowA",
    email: "snow@club.com",
    contact: 242424242,
    province: "Western Cape",
    country: "South Africa",
  },
  {
    id: 2,
    name: "SnowB",
    email: "snow@club.com",
    contact: 242424242,
    province: "Western Cape",
    country: "South Africa",
  },
  {
    id: 3,
    name: "SnowC",
    email: "snow@club.com",
    contact: 242424242,
    province: "Western Cape",
    country: "South Africa",
  },
  {
    id: 4,
    name: "Snow",
    email: "snow@club.com",
    contact: 242424242,
    province: "Western Cape",
    country: "South Africa",
  },
  {
    id: 5,
    name: "Snow",
    email: "snow@club.com",
    contact: 242424242,
    province: "Western Cape",
    country: "South Africa",
  },
  {
    id: 6,
    name: "Snow",
    email: "snow@club.com",
    contact: 242424242,
    province: "Western Cape",
    country: "South Africa",
  },
  {
    id: 7,
    name: "Snow",
    email: "snow@club.com",
    contact: 242424242,
    province: "Western Cape",
    country: "South Africa",
  },
  {
    id: 8,
    name: "Snow",
    email: "snow@club.com",
    contact: 242424242,
    province: "Western Cape",
    country: "South Africa",
  },
  {
    id: 9,
    name: "Snow",
    email: "snow@club.com",
    contact: 242424242,
    province: "Western Cape",
    country: "South Africa",
  },
];

export default function ClubMemberList() {
  return (
    <Grid item xs={12} sx={{ mt: 2 }}>
      <Paper
        elevation={3}
        square={false}
        sx={{ p: 2, display: "flex", flexDirection: "column", height: "75vh" }}
      >
        <Typography variant="h6">MEMBERS:</Typography>
        <Divider sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }} />

        <DataGrid
          sx={{
            // width: '100%',
            "& .super-app-theme--header": {
              backgroundColor: "#1976d2",
              color: "white",
            },
          }}
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
