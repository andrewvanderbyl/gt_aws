import AssignmentIcon from "@mui/icons-material/Assignment";
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

export default function PastUserEventsSubscribed(props) {
  const [event, setEvent] = useState({});
  const sliderPanel = useSliderPanel();
  const datagrid = useDataGrid();

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
            <Tooltip title="View Event" placement="right-start">
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
      renderCell: (params) => {
        const d = new Date(Date.parse(params.row.date));

        return d.toLocaleString("en-ZA", {
          dateStyle: "full",
          timeStyle: "short",
        });
      },
    },
  ];
  const eventHook = useEvent();

  useEffect(() => {
    (async () => {
      datagrid.showLoader();

      const newRows = await eventHook.fetchUserEvents(
        "PAST",
        {
          eventType: "future",
          page: datagrid.getPageNumber(),
          size: datagrid.getPageSize(),
        },
        props.userId
      );
      datagrid.updatePageState(newRows.data);
      datagrid.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [datagrid.getPageNumber(), datagrid.getPageSize()]);

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
          <Typography variant="h6">PAST EVENTS:</Typography>
          <Divider
            sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }}
          />

          <datagrid.DataGridPanel
            columns={columns}
            emptyText={"No past subscribed event(s) exist."}
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
