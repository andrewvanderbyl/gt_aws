import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useEvent } from "../../../../util/hooks/eventHook";
import { useSliderPanel } from "../../../../util/hooks/sliderPanelHook";
import ViewEvent from "./ViewEvent";
import { useAuth } from "../../../../util/context/AuthUserContext";
import { useLoader } from "../../../../util/hooks/loaderHook";

export default function UpcomingUserEventsUnsubscribed(props) {
  const [pageState, setPageState] = useState({
    total: 0,
    data: [],
    isLoading: false,
  });
  const [refresh, setRefresh] = useState();
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 8,
  });
  const [event, setEvent] = useState({});
  const sliderPanel = useSliderPanel();
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;
  const eventHook = useEvent();
  const loader = useLoader();

  const columns = [
    {
      field: "name",
      headerName: "NAME",
      // width: 250,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "date",
      headerName: "DATE",
      // width: 185,
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
      loader.showLoader();
      setPageState((old) => ({ ...old, isLoading: true }));

      const newRows = await eventHook.fetchUserEvents(
        "UPCOMING",
        {
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
      loader.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paginationModel.page, paginationModel.pageSize, refresh]);

  const handleSlidePanelClose = (event) => {
    event.preventDefault();
    sliderPanel.closePanel();
  };

  return (
    <>
      <loader.LoadingPanel />
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
          <Typography variant="h6">UPCOMING EVENTS:</Typography>
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
            // loading={pageState.isLoading}
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
                "No new upcoming event(s) currently exist. Please check again later for new event(s)",
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
