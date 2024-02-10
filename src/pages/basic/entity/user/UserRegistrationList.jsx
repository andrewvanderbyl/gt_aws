import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ViewListIcon from "@mui/icons-material/ViewList";
import SellIcon from "@mui/icons-material/Sell";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { deepOrange, deepPurple } from "@mui/material/colors";

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

export default function UserRegistrationList() {
  return (
    <Stack
      direction={"row"}
      sx={{ mt: 3, mb: 3, height: "75vh" }}
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={5}
    >
      <Paper
        elevation={3}
        square={false}
        sx={{ width: "30vh", height: "75vh" }}
      >
        <Card sx={{ boxShadow: 0 }}>
          <CardContent>
            <Typography variant="h6">REGISTRATIONS</Typography>
            <Divider sx={{ mt: 2, borderColor: "black", borderWidth: 2 }} />
          </CardContent>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: deepPurple[500],
                  width: "25vh",
                  height: "25vh",
                }}
                variant="square"
              >
                <SellIcon sx={{ fontSize: 80 }} />
              </Avatar>
            }
          >
            REGISTRATIONS:
          </CardHeader>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <IconButton variant="contained">
              <AddBoxIcon color="primary" sx={{ fontSize: 35 }} />
            </IconButton>
            <IconButton variant="contained">
              <ViewListIcon color="primary" sx={{ fontSize: 35 }} />
            </IconButton>
          </CardActions>
        </Card>
      </Paper>

      <Paper
        elevation={3}
        square={false}
        sx={{
          p: 2,
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "75vh",
        }}
      >
        <Typography variant="h6">LIST OF REGISTERED TAGS:</Typography>
        <Divider sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }} />
        <DataGrid
          sx={{
            "& .super-app-theme--header": {
              backgroundColor: "#1976d2",
              color: "white",
            },
          }}
          rows={rows}
          columns={columns}
          getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
          }
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </Paper>
    </Stack>
  );
}
