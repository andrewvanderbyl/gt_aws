import CancelIcon from "@mui/icons-material/Cancel";
import {
  Button,
  ButtonGroup,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useAuth } from "../../../../util/context/AuthUserContext";
import { useClub } from "../../../../util/hooks/clubHook";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import useStyles from "../../../../util/hooks/useStyles";

export default function UserClubsList({ handleCancel, showClub }) {
  const dataGrid = useDataGrid();
  const clubHook = useClub();
  const authHook = useAuth();
  const loggedInUser = authHook.localStorageValue;
  const classes = useStyles();

  const columns = [
    {
      field: "name",
      headerName: "CLUB",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      width: 190,
      flex: 1,
    },
    {
      field: "id",
      headerName: "ACTIONS",
      width: 150,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      disableClickEventBubbling: true,
      // flex: 1,
      renderCell: (params) => {
        const handleCreateChipEntryClick = async (event) => {
          await clubHook.joinClub(params.row.id, loggedInUser.id);
          handleCancel();
        };

        return (
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleCreateChipEntryClick}>
              Join
            </Button>
          </Stack>
        );
      },
    },
  ];

  useEffect(() => {
    if (showClub) {
      (async () => {
        dataGrid.showLoader();
        const newRowsResponse = await clubHook.fetchClubList({
          page: dataGrid.getPageNumber(),
          size: dataGrid.getPageSize(),
        });
        dataGrid.updatePageState(newRowsResponse.data);
        dataGrid.closeLoader();
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize(), showClub]);

  return (
    <Stack sx={{ mt: 2, ml: 3, mr: 3, width: 430 }} spacing={5}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.toolBarTitle}>
          Join A Club
        </Typography>
      </Toolbar>
      <Paper
        square={false}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "68vh",
        }}
      >
        <dataGrid.DataGridPanel
          columns={columns}
          emptyText={"No Club(s) currently exist."}
        />
      </Paper>

      <ButtonGroup
        sx={{
          display: "flex",
          boxShadow: "0",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button startIcon={<CancelIcon />} onClick={handleCancel}>
          Close
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
