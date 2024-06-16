import CancelIcon from "@mui/icons-material/Cancel";
import {
  Button,
  ButtonGroup,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { useDataGrid } from "../../../../util/hooks/datagridHook";
import { useEffect } from "react";
import { useAsa } from "../../../../util/hooks/asaHook";
import { useAuth } from "../../../../util/context/AuthUserContext";
import useStyles from "../../../../util/hooks/useStyles";

export default function ViewAsa({ handleCancel, asa }) {
  const classes = useStyles();
  const dataGrid = useDataGrid();
  const asaHook = useAsa();
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;
  const columns = [
    {
      field: "tag",
      headerName: "TIMING CHIP(s)",
      headerAlign: "center",
      align: "center",
      headerClassName: "super-app-theme--header",
      flex: 1,
    },
  ];

  useEffect(() => {
    if (asa["id"]) {
      (async () => {
        dataGrid.showLoader();
        const newRows = await asaHook.fetchTimingListForAsa(
          {
            page: dataGrid.getPageNumber(),
            size: dataGrid.getPageSize(),
          },
          asa["id"],
          userData.id
        );
        dataGrid.updatePageState(newRows.data);
        dataGrid.closeLoader();
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataGrid.getPageNumber(), dataGrid.getPageSize(), asa]);

  return (
    <Stack sx={{ mt: 2, ml: 3, mr: 3, width: 420 }} spacing={3}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.toolBarTitle}>
          {asa["asa"]}
        </Typography>
      </Toolbar>

      <Paper
        // elevation={3}
        square={false}
        sx={{
          // p: 2,
          display: "flex",
          flexDirection: "column",
          height: "68vh",
        }}
      >
        <dataGrid.DataGridPanel
          columns={columns}
          emptyText={"No chip entries currently exist."}
        />
      </Paper>

      <ButtonGroup
        sx={{
          display: "flex",
          boxShadow: "0",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 10,
        }}
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button startIcon={<CancelIcon />} onClick={handleCancel}>
          Close
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
