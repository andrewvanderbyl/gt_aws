import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  Button,
  ButtonGroup,
  Divider,
  Grid,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useEvent } from "../../../../util/hooks/eventHook";
import { useSliderPanel } from "../../../../util/hooks/sliderPanelHook";
import ViewEvent from "./ViewEvent";

export default function AdminEventList({
  forceRefresh,
  eventDataType,
  headerText,
}) {
  const [event, setEvent] = useState({});
  const sliderPanel = useSliderPanel();
  const dataGrid = useDataGrid();

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
            <Tooltip title="View/Edit Event" placement="right-start">
              <Button onClick={handleClick}>
                <ModeEditIcon />
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
      dataGrid.showLoader();

      const newRows = await eventHook.fetchEventList({
        eventType: eventDataType,
        page: dataGrid.getPageNumber(),
        size: dataGrid.getPageSize(),
      });
      if (newRows.status === 200) {
        dataGrid.updatePageState(newRows.data);
      }
      dataGrid.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    dataGrid.getPageNumber(),
    dataGrid.getPageSize(),
    forceRefresh,
    eventDataType,
  ]);

  const handleSlidePanelClose = (event) => {
    event.preventDefault();
    sliderPanel.closePanel();
  };

  return (
    <>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
        <Paper
          elevation={3}
          square={false}
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: "83vh",
          }}
        >
          <Typography variant="h6">{headerText} :</Typography>
          <Divider
            sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }}
          />

          <dataGrid.DataGridPanel
            columns={columns}
            emptyText={
              "No Event(s) currently exist. Please create an Event or contact support"
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
