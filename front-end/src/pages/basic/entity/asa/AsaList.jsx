import AssignmentIcon from "@mui/icons-material/Assignment";
import { Button, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../util/context/AuthUserContext";
import { useAsa } from "../../../../util/hooks/asaHook";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useSliderPanel } from "../../../../util/hooks/sliderPanelHook";
import ViewAsa from "./ViewAsa";

export default function AsaList({ forceRefresh }) {
  const [asa, setAsa] = useState({});
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
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize(), forceRefresh]);

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
            p: 3,
            display: "flex",
            flexDirection: "column",
            height: "83vh",
          }}
        >
          <Typography variant="h6">ASA:</Typography>
          <Divider
            sx={{ mt: 2, mb: 2, borderColor: "black", borderWidth: 2 }}
          />

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
          <ViewAsa handleCancel={handleSlidePanelClose} asa={asa} />
        }
      />
    </>
  );
}
