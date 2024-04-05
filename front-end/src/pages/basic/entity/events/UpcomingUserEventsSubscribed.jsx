import AssignmentIcon from "@mui/icons-material/Assignment";
import { Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useEvent } from "../../../../util/hooks/eventHook";
import { useSliderPanel } from "../../../../util/hooks/sliderPanelHook";
import ViewEvent from "./ViewEvent";

export default function UpcomingUserEventsSubscribed(props) {
  const [pageState, setPageState] = useState({
    total: 0,
    data: [],
    isLoading: false,
  });
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 8,
  });
  const [event, setEvent] = useState({});
  const sliderPanel = useSliderPanel();

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
      setPageState((old) => ({ ...old, isLoading: true }));

      const newRows = await eventHook.fetchUserEvents(
        "SUBSCRIBED",
        {
          eventType: "future",
          page: paginationModel.page,
          size: paginationModel.pageSize,
        },
        props.userId
      );
      setPageState((old) => ({
        ...old,
        isLoading: false,
        data: newRows.data,
        total: newRows.count,
      }));
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationModel.page, paginationModel.pageSize]);

  const handleSlidePanelClose = (event) => {
    event.preventDefault();
    sliderPanel.closePanel();
  };

  return (
    <>
      <Grid item xs={12} sx={{ mt: 2 }}>
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
          <Typography variant="h6">SUBSCRIBED EVENTS:</Typography>
          <Divider
            sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }}
          />

          <DataGrid
            sx={{
              // width: '100%',
              "& .super-app-theme--header": {
                backgroundColor: "#1C4E80",
                color: "white",
              },
            }}
            loading={pageState.isLoading}
            rows={pageState.data}
            columns={columns}
            rowCount={pageState.total}
            disableRowSelectionOnClick
            paginationMode="server"
            paginationModel={paginationModel}
            pageSizeOptions={[8]}
            keepNonExistentRowsSelected
            getRowId={(row) => row.id}
            onPaginationModelChange={setPaginationModel}
            pagination
            localeText={{
              noRowsLabel:
                "No upcoming subscribed event(s) currently exist. Please subscribe to an 'Upcoming' event to participate.",
            }}
            rowHeight={43}
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
