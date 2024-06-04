import {
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useClub } from "../../../../util/hooks/clubHook";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useSliderPanel } from "../../../../util/hooks/sliderPanelHook";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ViewEvent from "../events/ViewEvent";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AdminClubCreate from "./AdminClubCreate";

export default function ClubList({ forceRefresh }) {
  const clubHook = useClub();
  const dataGrid = useDataGrid();
  const sliderPanel = useSliderPanel();
  const [event, setEvent] = useState({});

  const columns = [
    {
      field: "id",
      width: 160,
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

        return (
          <ButtonGroup
            // value={formats}
            // onChange={handleFormat}
            variant="contained"
            color="primary"
            sx={{ mt: 0.5 }}
          >
            <Button
              onClick={handleClick}
              // sx={{
              //   backgroundColor: "primary",
              // }}
            >
              <ModeEditIcon />
            </Button>
          </ButtonGroup>
          // <Stack direction="row" spacing={2}>
          //   <Button
          //     variant="contained"
          //     startIcon={<ModeEditIcon />}
          //     onClick={handleClick}
          //   />
          // </Stack>
        );
      },
    },
    {
      field: "name",
      headerName: "NAME",
      width: 70,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "email",
      headerName: "EMAIL",
      width: 70,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "contact",
      headerName: "CONTACT",
      width: 70,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "province",
      headerName: "PROVINCE",
      width: 130,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
  ];

  const handleSlidePanelClose = (event) => {
    event.preventDefault();
    sliderPanel.closePanel();
  };

  useEffect(() => {
    (async () => {
      dataGrid.showLoader();

      const clubListResponse = await clubHook.fetchClubList({
        page: dataGrid.getPageNumber(),
        size: dataGrid.getPageSize(),
      });
      dataGrid.updatePageState(clubListResponse.data);
      dataGrid.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize(), forceRefresh]);

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
          <dataGrid.DataGridPanel
            columns={columns}
            emptyText={
              "No Club(s) currently exist. Please create a Club or contact support"
            }
          />
        </Paper>
      </Grid>
      <sliderPanel.SliderPanel
        panelContent={
          <AdminClubCreate handleCancel={handleSlidePanelClose} event={event} />
        }
      />
    </>
  );
}
