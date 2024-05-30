import AssignmentIcon from "@mui/icons-material/Assignment";
import MemoryIcon from "@mui/icons-material/Memory";
import { Button, Grid, Paper, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../util/context/AuthUserContext";
import { useAsa } from "../../../../util/hooks/asaHook";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useSliderPanel } from "../../../../util/hooks/sliderPanelHook";
import TimingChipCreate from "./TimingChipCreate";
import ViewAsa from "./ViewAsa";

export default function AsaList({ forceRefresh }) {
  const [asa, setAsa] = useState({});
  const [showAsaView, setShowAsaView] = useState(true);
  const dataGrid = useDataGrid();
  const sliderPanel = useSliderPanel();

  const asaHook = useAsa();
  const authHook = useAuth();
  const loggedInUser = authHook.localStorageValue;
  const columns = [
    {
      field: "asa",
      headerName: "NUMBER",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "id",
      headerName: "ACTIONS",
      width: 300,
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      disableClickEventBubbling: true,
      // flex: 1,
      renderCell: (params) => {
        const handleClick = (event) => {
          setAsa(params.row);
          setShowAsaView(true);
          sliderPanel.openPanel();
        };

        const handleCreateChipEntryClick = (event) => {
          setAsa(params.row);
          setShowAsaView(false);
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
            <Button
              variant="outlined"
              startIcon={<MemoryIcon />}
              onClick={handleCreateChipEntryClick}
            >
              Chip Entry
            </Button>
          </Stack>
        );
      },
    },
  ];

  useEffect(() => {
    (async () => {
      dataGrid.showLoader();

      const newRows = await asaHook.fetchAsaList(
        {
          page: dataGrid.getPageNumber(),
          size: dataGrid.getPageSize(),
        },
        loggedInUser.id
      );
      dataGrid.updatePageState(newRows);
      dataGrid.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize(), forceRefresh]);

  const handleSlidePanelClose = (event) => {
    event.preventDefault();
    sliderPanel.closePanel();
  };

  const handleCreateChipFormCancelClick = (event) => {
    event.preventDefault();
    sliderPanel.closePanel();
  };

  const handleCreateChipCreatedEvent = () => {
    sliderPanel.closePanel();
  };

  return (
    <>
      <Grid item xs={12} sx={{ mt: 2, mb: 2 }}>
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
          <dataGrid.DataGridPanel
            columns={columns}
            emptyText={
              "No Asa(s) currently exist. Please create an ASA Number or contact support"
            }
          />
        </Paper>
      </Grid>
      <sliderPanel.SliderPanel
        panelContent={
          showAsaView ? (
            <ViewAsa handleCancel={handleSlidePanelClose} asa={asa} />
          ) : (
            <TimingChipCreate
              asa={asa}
              handleCancel={handleCreateChipFormCancelClick}
              handleCreated={handleCreateChipCreatedEvent}
            />
          )
        }
      />
    </>
  );
}
