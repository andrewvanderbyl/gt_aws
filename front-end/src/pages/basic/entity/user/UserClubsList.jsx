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
import { useClub } from "../../../../util/hooks/clubHook";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useAuth } from "../../../../util/context/AuthUserContext";

export default function UserClubsList({ handleCancel }) {
  const dataGrid = useDataGrid();
  const clubHook = useClub();
  const authHook = useAuth();
  const loggedInUser = authHook.localStorageValue;

  const columns = [
    {
      field: "name",
      headerName: "CLUB",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      width: 200,
      flex: 1,
    },
    {
      field: "id",
      headerName: "ACTIONS",
      width: 110,
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
    (async () => {
      dataGrid.showLoader();
      const newRows = await clubHook.fetchClubList({
        page: dataGrid.getPageNumber(),
        size: dataGrid.getPageSize(),
      });
      dataGrid.updatePageState(newRows);
      dataGrid.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize()]);

  return (
    <Stack
      sx={{
        mt: 2,
        ml: 5,
        mr: 5,
        width: 420,
        "& .MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: "black",
        },
      }}
      spacing={5}
    >
      <Toolbar sx={{ backgroundColor: "#1C4E80" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          CLUB MEMBERSHIP
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
