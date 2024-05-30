import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../util/context/AuthUserContext";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useEvent } from "../../../../util/hooks/eventHook";
import { useSliderPanel } from "../../../../util/hooks/sliderPanelHook";
import ViewEvent from "./ViewEvent";

export default function UpcomingUserEventsUnsubscribed(props) {
  const [refresh, setRefresh] = useState();
  const [event, setEvent] = useState({});
  const sliderPanel = useSliderPanel();
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;
  const eventHook = useEvent();
  const dataGrid = useDataGrid();

  const columns = [
    {
      field: "name",
      headerName: "NAME",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "date",
      headerName: "DATE",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "id",
      width: 300,
      headerName: "ACTIONS",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      disableClickEventBubbling: true,
      // flex: 1,
      renderCell: (params) => {
        const handleClick = (event) => {
          setEvent(params.row);
          sliderPanel.openPanel();
        };

        const handleSubscribeClick = async (event) => {
          await eventHook.subscribeUserToEvent(params.row.id, userData.id);
          setRefresh(new Date());
        };

        return (
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<AssignmentIcon />}
              onClick={handleClick}
            >
              View
            </Button>
            <Button
              variant="outlined"
              startIcon={<AssignmentTurnedInIcon />}
              onClick={handleSubscribeClick}
            >
              Subscribe
            </Button>
          </Stack>
        );
      },
    },
  ];

  useEffect(() => {
    (async () => {
      dataGrid.showLoader();
      const newRows = await eventHook.fetchUserEvents(
        "UPCOMING",
        {
          page: dataGrid.getPageNumber(),
          size: dataGrid.getPageSize(),
        },
        props.userId
      );
      dataGrid.updatePageState(newRows);
      dataGrid.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize(), refresh]);

  const handleSlidePanelClose = (event) => {
    event.preventDefault();
    sliderPanel.closePanel();
  };

  return (
    <>
      <Grid item xs={12} sx={{ mt: 2 }}>
        <Paper
          elevation={10}
          square={false}
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "83vh",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h6">UPCOMING EVENTS:</Typography>
          <Divider
            sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }}
          />

          <dataGrid.DataGridPanel
            columns={columns}
            emptyText={
              "No new upcoming event(s) currently exist. Please check again later for new event(s)"
            }
          />
        </Paper>
      </Grid>
      <sliderPanel.SliderPanel
        panelContent={
          <ViewEvent handleCancel={handleSlidePanelClose} event={event} />
        }
      />
    </>
  );
}
