import AssignmentIcon from "@mui/icons-material/Assignment";
import { Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useEvent } from "../../../../util/hooks/eventHook";
import { useSliderPanel } from "../../../../util/hooks/sliderPanelHook";
import ViewEvent from "./ViewEvent";

export default function UpcomingUserEventsSubscribed(props) {
  const [event, setEvent] = useState({});
  const sliderPanel = useSliderPanel();
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
          console.log("Params", params.row);
          setEvent(params.row);
          sliderPanel.openPanel();
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
          </Stack>
        );
      },
    },
  ];
  const eventHook = useEvent();

  useEffect(() => {
    (async () => {
      dataGrid.showLoader();
      const newRows = await eventHook.fetchUserEvents(
        "SUBSCRIBED",
        {
          eventType: "future",
          page: dataGrid.getPageNumber(),
          size: dataGrid.getPageSize(),
        },
        props.userId
      );
      dataGrid.updatePageState(newRows);
      dataGrid.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize()]);

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
          }}
        >
          <Typography variant="h6">SUBSCRIBED EVENTS:</Typography>
          <Divider
            sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }}
          />

          <dataGrid.DataGridPanel
            columns={columns}
            emptyText={
              "No upcoming subscribed event(s) currently exist. Please subscribe to an 'Upcoming' event to participate."
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
