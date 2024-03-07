import { Divider, Grid, Paper, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  {
    field: "race",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "RACE",
    width: 250,
    flex: 1,
  },
  {
    field: "raceDate",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "DATE",
    width: 150,
    flex: 1,
  },
  // {
  //   field: "cost",
  //   headerAlign: "center",
  //   align: "center",
  //   headerClassName: "super-app-theme--header",
  //   headerName: "COST",
  //   width: 150,
  //   type: "number",
  //   flex: 1,
  // },
  {
    field: "tagId",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "TAG",
    width: 200,
    flex: 1,
  },
  {
    field: "position",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "POSITION",
    width: 130,
    flex: 1,
  },
  {
    field: "age_category",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "AGE CATEGORY",
    width: 130,
    flex: 1,
  },
  {
    field: "time",
    headerAlign: "center",
    align: "center",
    headerClassName: "super-app-theme--header",
    headerName: "TIME",
    width: 130,
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    race: "Race 1",
    raceDate: "01-01-2024",
    cost: 100,
    tagId: "AA-BB-CC-DD",
    position: 200,
    age_category: "40-50",
    time: "9:45:00",
  },
  {
    id: 2,
    race: "Race 2",
    raceDate: "01-01-2024",
    cost: 100,
    tagId: "AA-BB-CC-DD",
    position: 200,
    age_category: "40-50",
    time: "9:45:00",
  },
  {
    id: 3,
    race: "Race 3",
    raceDate: "01-01-2024",
    cost: 100,
    tagId: "AA-BB-CC-DD",
    position: 200,
    age_category: "40-50",
    time: "9:45:00",
  },
  {
    id: 4,
    race: "Race 4",
    raceDate: "01-01-2024",
    cost: 100,
    tagId: "AA-BB-CC-DD",
    position: 200,
    age_category: "40-50",
    time: "9:45:00",
  },
  {
    id: 5,
    race: "Race 5",
    raceDate: "01-01-2024",
    cost: 100,
    tagId: "AA-BB-CC-DD",
    position: 200,
    age_category: "40-50",
    time: "9:45:00",
  },
  {
    id: 6,
    race: "Race 6",
    raceDate: "01-01-2024",
    cost: 100,
    tagId: "AA-BB-CC-DD",
    position: 200,
    age_category: "40-50",
    time: "9:45:00",
  },
  {
    id: 7,
    race: "Race 7",
    raceDate: "01-01-2024",
    cost: 100,
    tagId: "AA-BB-CC-DD",
    position: 200,
    age_category: "40-50",
    time: "9:45:00",
  },
  {
    id: 8,
    race: "Race 8",
    raceDate: "01-01-2024",
    cost: 100,
    tagId: "AA-BB-CC-DD",
    position: 200,    
    age_category: "40-50",
    time: "9:45:00",
  },
  {
    id: 9,
    race: "Race 9",
    raceDate: "01-01-2024",
    cost: 100,
    tagId: "AA-BB-CC-DD",
    position: 200,
    age_category: "40-50",
    time: "9:45:00",
  },
];

export default function UserRaceList() {
  return (
    <Grid item xs={12} sx={{ mt: 2 }}>
      <Paper
        elevation={3}
        square={false}
        sx={{ p: 2, display: "flex", flexDirection: "column", height: "75vh" }}
      >
        <Typography variant="h6">RACES:</Typography>
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
    </Grid>
  );
}
