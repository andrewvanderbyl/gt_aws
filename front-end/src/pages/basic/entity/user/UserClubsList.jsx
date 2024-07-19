import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Button,
  ButtonGroup,
  Paper,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useClub } from "../../../../util/hooks/clubHook";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useLoader } from "../../../../util/hooks/loaderHook";
import { useSuccessAlert } from "../../../../util/hooks/successAlert";
import useStyles from "../../../../util/hooks/useStyles";

export default function UserClubsList({ handleCancel, showClub }) {
  const dataGrid = useDataGrid();
  const successAlertPanel = useSuccessAlert(handleCancel);
  const clubHook = useClub();
  const loader = useLoader();
  const classes = useStyles();
  const [club, setClub] = useState({});

  const columns = [
    {
      field: "id",
      headerName: "",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      width: 60,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      disableClickEventBubbling: true,
      // flex: 1,
      renderCell: (params) => {
        const handleJoinClubClick = async (event) => {
          loader.showLoader();
          await clubHook.joinClub(params.row.id);
          loader.closeLoader();
          successAlertPanel.showPanel("Joined club successfully");
        };

        return (
          <>
            <ButtonGroup>
              <Tooltip title="Click to join" placement="right-start">
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  sx={{ mt: 0.5 }}
                  onClick={handleJoinClubClick}
                >
                  <AddCircleIcon />
                </Button>
              </Tooltip>
            </ButtonGroup>
          </>
        );
      },
    },
    {
      field: "name",
      headerName: "CLUB",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      width: 190,
      flex: 1,
    },
  ];

  useEffect(() => {
    if (showClub) {
      (async () => {
        const userClubResponse = await clubHook.fetchUserClub({
          page: 0,
          size: 1,
        });

        if (userClubResponse.data.data.length === 1) {
          setClub(userClubResponse.data.data[0]);
        } else {
          dataGrid.showLoader();
          const newRowsResponse = await clubHook.fetchClubList({
            page: dataGrid.getPageNumber(),
            size: dataGrid.getPageSize(),
          });
          dataGrid.updatePageState(newRowsResponse.data);
          dataGrid.closeLoader();
          setClub(null);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize(), showClub]);

  return (
    <>
      <loader.LoadingPanel />

      <Stack sx={{ mt: 2, ml: 3, mr: 3, width: 430 }} spacing={5}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.toolBarTitle}>
            {club ? "Club Membership" : "Join A Club"}
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
          {club ? (
            <>
              <Stack direction="row">
                <Stack
                  direction="column"
                  sx={{ mt: 2, ml: 3, mr: 3 }}
                  spacing={5}
                >
                  <Typography
                    variant="h7"
                    fontWeight="bold"
                  >{`Club:`}</Typography>
                  <Typography
                    variant="h7"
                    fontWeight="bold"
                  >{`Contact:`}</Typography>
                  <Typography
                    variant="h7"
                    fontWeight="bold"
                  >{`Email:`}</Typography>
                  <Typography
                    variant="h7"
                    fontWeight="bold"
                  >{`Province:`}</Typography>
                  <Typography
                    variant="h7"
                    fontWeight="bold"
                  >{`Country:`}</Typography>
                </Stack>
                <Stack
                  direction="column"
                  sx={{ mt: 2, ml: 3, mr: 3 }}
                  spacing={5}
                >
                  <Typography variant="h7">{club.name}</Typography>
                  <Typography variant="h7">{club.contact}</Typography>
                  <Typography variant="h7">{club.email}</Typography>
                  <Typography variant="h7">{club.province}</Typography>
                  <Typography variant="h7">South Africa</Typography>
                </Stack>
              </Stack>
            </>
          ) : (
            <>
              <dataGrid.DataGridPanel
                columns={columns}
                emptyText={"No Club(s) currently exist."}
              />
            </>
          )}
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
        <successAlertPanel.SuccessPanel />
      </Stack>
    </>
  );
}
