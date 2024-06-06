import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Button, ButtonGroup, Grid, Paper, Tooltip } from "@mui/material";
import { useEffect, useState } from "react";
import { useClub } from "../../../../util/hooks/clubHook";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useSliderPanel } from "../../../../util/hooks/sliderPanelHook";
import AdminClubCreateEdit from "./AdminClubCreateEdit";

export default function ClubList({ forceRefresh }) {
  const clubHook = useClub();
  const dataGrid = useDataGrid();
  const sliderPanel = useSliderPanel();
  const [viewClubData, setViewClubData] = useState({});
  const [refresh, setRefresh] = useState(false);

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
      // flex: 1,
      renderCell: (params) => {
        const handleClick = (event) => {
          setViewClubData(params.row);
          sliderPanel.openPanel();
        };

        return (
          <ButtonGroup
            size="small"
            variant="contained"
            color="primary"
            sx={{ mt: 0.5 }}
          >
            <Tooltip title="View/Edit Club" placement="right-start">
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

  const handleClubEdited = (event) => {
    sliderPanel.closePanel();
    setRefresh(Date.now());
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
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize(), forceRefresh, refresh]);

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
          <AdminClubCreateEdit
            handleCancel={handleSlidePanelClose}
            handleClubCreate={handleClubEdited}
            club={viewClubData}
          />
        }
      />
    </>
  );
}
