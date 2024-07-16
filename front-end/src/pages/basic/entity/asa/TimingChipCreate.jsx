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
import { useSessionStorage } from "../../../../util/hooks/sessionStorageHook";
import { useSuccessAlert } from "../../../../util/hooks/successAlert";
import useStyles from "../../../../util/hooks/useStyles";

export default function TimingChipCreate({ asa, handleCancel, handleCreated }) {
  // const [tag, setTag] = useState("");
  const classes = useStyles();
  const notificationPanel = useNotificationPanel();
  const successAlertPanel = useSuccessAlert(handleCreated);
  const loader = useLoader();

  const asaHook = useAsa();
  const sessionStorage = useSessionStorage();

  const initial = {
    tag: "",
  };
  const validationSchema = object({
    tag: string().required("Timing chip is required"),
  });

  async function handleSubmit(values, formikHelpers) {
    notificationPanel.closePanel();

    loader.showLoader();
    const createdTimingChipResponse = await asaHook.createTimingForAsa(
      { tag: values.tag },
      asa["id"],
      sessionStorage.sessionStorageValue
    );
    loader.closeLoader();

    if (createdTimingChipResponse.error) {
      notificationPanel.showPanel(createdTimingChipResponse.error);
    } else {
      formikHelpers.resetForm();
      successAlertPanel.showPanel(
        `Tag ${createdTimingChipResponse.data.tag} created successfully for ASA ${asa.asa}`
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
            Create New Chip Entry
          </Typography>
        </Toolbar>
        <notificationPanel.NotificationPanel />
        <Typography variant="h7">{`ASA Number :  ${asa.asa}`}</Typography>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.formLabel}
            required
            fullWidth
            id="tag"
            name="tag"
            label="Timing Chip"
            margin="normal"
            type="text"
            autoFocus
            value={formik.values.tag}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.tag) && Boolean(formik.touched.tag)}
            helperText={Boolean(formik.touched.tag) && formik.errors.tag}
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
