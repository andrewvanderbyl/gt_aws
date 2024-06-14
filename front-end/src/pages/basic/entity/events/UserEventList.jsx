import AssignmentIcon from "@mui/icons-material/Assignment";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import {
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useEvent } from "../../../../util/hooks/eventHook";
import { useSliderPanel } from "../../../../util/hooks/sliderPanelHook";
import ViewEvent from "./ViewEvent";

export default function UserEventList(props) {
  const [event, setEvent] = useState({});
  const sliderPanel = useSliderPanel();
  const dataGrid = useDataGrid();
  const [refresh, setRefresh] = useState(false);

  const eventType = props.eventType;
  var gridTitle;
  var emptyText;
  var buttonToolTip;
  switch (eventType) {
    case "SUBSCRIBED":
      gridTitle = "Subscribed Events";
      buttonToolTip = "View Event";
      emptyText =
        "No upcoming subscribed event(s) currently exist. Please subscribe to  'New' event to participate.";
      break;
    case "UPCOMING":
      gridTitle = "New Events";
      buttonToolTip = "View Event and Subscribe";
      emptyText =
        "No new upcoming event(s) currently exist. Please check again later for new event(s)";
      break;
  }

  const columns = [
    {
      field: "id",
      disableColumnMenu: true,
      width: 80,
      headerName: "",
      headerAlign: "center",
      align: "center",
      sortable: false,
      filterable: false,
      headerClassName: "super-app-theme--header",
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const handleClick = (event) => {
          setEvent(params.row);
          sliderPanel.openPanel();
        };

        return (
          <ButtonGroup
            size="small"
            variant="contained"
            color="primary"
            sx={{ mt: 0.5 }}
          >
            <Tooltip title={buttonToolTip} placement="right-start">
              <Button onClick={handleClick}>
                <AssignmentIcon />
              </Button>
            </Tooltip>
          </ButtonGroup>
        );
      },
    },
    {
      field: "name",
      headerName: "NAME",
      headerAlign: "center",
      align: "left",
      headerClassName: "super-app-theme--header",
      flex: 1,
      renderCell: (params) => {
        const d = new Date(Date.parse(params.row.date));

        const eventDate = d.toLocaleString("en-ZA", {
          dateStyle: "full",
          timeStyle: "short",
        });

        return `${params.row.name} (${eventDate})`;
      },
    },
    {
      field: "status",
      headerName: "STATUS",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
      renderCell: (params) => {
        const d = new Date(Date.parse(params.row.date));
        const secondDate = new Date();

        const start = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
        const end = Date.UTC(
          secondDate.getFullYear(),
          secondDate.getMonth(),
          secondDate.getDate()
        );

        // so it's safe to divide by 24 hours
        const daysDiff = (start - end) / (1000 * 60 * 60 * 24);
        if (daysDiff < 0) {
          return (
            <Stack direction="row" alignItems="center" gap={1}>
              <HourglassBottomIcon
                sx={{ fontSize: 35, marginTop: 0.5 }}
                color="error"
              />
              <Typography variant="h7">Expired</Typography>
            </Stack>
          );
        } else {
          return (
            <Stack direction="row" alignItems="center" gap={1}>
              <HourglassTopIcon
                sx={{ fontSize: 35, marginTop: 0.5 }}
                color="success"
              />
              <Typography variant="h7">Starring in {daysDiff} days</Typography>
            </Stack>
          );
        }
      },
    },
  ];
  const eventHook = useEvent();

  useEffect(() => {
    (async () => {
      dataGrid.showLoader();
      const newRows = await eventHook.fetchUserEvents(
        props.eventType,
        {
          eventType: "future",
          page: dataGrid.getPageNumber(),
          size: dataGrid.getPageSize(),
        },
        props.userId
      );
      dataGrid.updatePageState(newRows.data);
      dataGrid.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dataGrid.getPageNumber(),
    dataGrid.getPageSize(),
    props.eventType,
    refresh,
  ]);

  const handleSlidePanelClose = (event) => {
    event.preventDefault();
    sliderPanel.closePanel();
  };

  const handleEventSubscribed = () => {
    if (eventType === "UPCOMING") {
      sliderPanel.closePanel();
      setRefresh(Date.now());
    }
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
          <Typography variant="h6">{gridTitle}</Typography>
          <Divider
            sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }}
          />

          <dataGrid.DataGridPanel columns={columns} emptyText={emptyText} />
        </Paper>
      </Grid>
      <sliderPanel.SliderPanel
        panelContent={
          <ViewEvent
            handleCancel={handleSlidePanelClose}
            event={event}
            showSubscribe={props.eventType === "UPCOMING"}
            handleEventSubscribed={handleEventSubscribed}
          />
        }
      />
    </>
  );
}
