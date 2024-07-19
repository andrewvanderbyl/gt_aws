import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useAsa } from "../../../../util/hooks/asaHook";
import { useLoader } from "../../../../util/hooks/loaderHook";
import { useNotificationPanel } from "../../../../util/hooks/notificationPanelHook";
import { useSuccessAlert } from "../../../../util/hooks/successAlert";
import useStyles from "../../../../util/hooks/useStyles";

export default function AsaCreate({ handleCancel, handleAsaCreated }) {
  const classes = useStyles();
  const notificationPanel = useNotificationPanel();
  const successAlertPanel = useSuccessAlert(handleAsaCreated);
  const loader = useLoader();

  const asaHook = useAsa();
  const initial = {
    asa: "",
  };
  const validationSchema = object({
    asa: string().required("ASA is required"),
  });

  async function handleSubmit(values, formikHelpers) {
    notificationPanel.closePanel();

    loader.showLoader();
    const createdAsaResponse = await asaHook.createAsa({ asa: values.asa });
    loader.closeLoader();

    if (createdAsaResponse.error) {
      notificationPanel.showPanel(createdAsaResponse.error);
    } else {
      formikHelpers.resetForm();
      successAlertPanel.showPanel(
        `ASA Number ${createdAsaResponse.data.asa} created successfully`
      );
    }
  }

  const formik = useFormik({
    initialValues: initial,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <loader.LoadingPanel />
      <Stack sx={{ mt: 2, ml: 3, mr: 3, width: 420 }} spacing={3}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.toolBarTitle}>
            Create New Asa
          </Typography>
        </Toolbar>
        <notificationPanel.NotificationPanel />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.formLabel}
            required
            fullWidth
            id="asa"
            name="asa"
            label="Asa Number"
            margin="normal"
            type="text"
            autoFocus
            value={formik.values.asa}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.asa) && Boolean(formik.touched.asa)}
            helperText={Boolean(formik.touched.asa) && formik.errors.asa}
          />

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
              Cancel
            </Button>
            <Button
              type="Submit"
              startIcon={<SaveIcon />}
              sx={{ marginLeft: 5 }}
              disabled={!formik.dirty || !formik.isValid}
            >
              Save
            </Button>
          </ButtonGroup>
        </form>
        <successAlertPanel.SuccessPanel />
      </Stack>
    </>
  );
}
