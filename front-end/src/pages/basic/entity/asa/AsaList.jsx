import AssignmentIcon from "@mui/icons-material/Assignment";
import MemoryIcon from "@mui/icons-material/Memory";
import {
  Button,
  ButtonGroup,
  Grid,
  Paper,
  Stack,
  Tooltip,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../util/context/AuthUserContext";
import { useAsa } from "../../../../util/hooks/asaHook";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useSliderPanel } from "../../../../util/hooks/sliderPanelHook";
import TimingChipCreate from "./TimingChipCreate";
import ViewAsa from "./ViewAsa";
import { useSessionStorage } from "../../../../util/hooks/sessionStorageHook";

export default function AsaList({ forceRefresh }) {
  const [asa, setAsa] = useState({});
  const [showAsaView, setShowAsaView] = useState(true);
  const dataGrid = useDataGrid();
  const sliderPanel = useSliderPanel();
  const sessionStorage = useSessionStorage();
  const [refresh, setRefresh] = useState(false);

  const asaHook = useAsa();
  const columns = [
    {
      field: "id",
      headerName: "ACTIONS",
      width: 120,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
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
          <ButtonGroup
            size="small"
            variant="contained"
            color="primary"
            sx={{ mt: 1, mb: 1 }}
          >
            <Tooltip title={"View ASA"} placement="right-start">
              <Button onClick={handleClick}>
                <AssignmentIcon />
              </Button>
            </Tooltip>
            <Tooltip title={"Create Chip Entry"} placement="right-start">
              <Button
                onClick={handleCreateChipEntryClick}
                sx={{ marginLeft: 1 }}
              >
                <MemoryIcon />
              </Button>
            </Tooltip>
          </ButtonGroup>
        );
      },
    },
    {
      field: "asa",
      headerName: "NUMBER",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
    {
      field: "numTags",
      headerName: "TIMING CHIPS",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
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
        sessionStorage.sessionStorageValue
      );
      dataGrid.updatePageState(newRows.data);
      dataGrid.closeLoader();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize(), forceRefresh, refresh]);

  const handleSlidePanelClose = (event) => {
    event.preventDefault();
    sliderPanel.closePanel();
    setRefresh(Date.now());
  };

  const handleCreateChipFormCancelClick = (event) => {
    event.preventDefault();
    sliderPanel.closePanel();
  };

  const handleCreateChipCreatedEvent = () => {
    sliderPanel.closePanel();
    setRefresh(Date.now());
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
