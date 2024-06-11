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
import { DateTimePicker, renderTimeViewClock } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useFormik } from "formik";
import { object, string } from "yup";
import { useEvent } from "../../../../util/hooks/eventHook";
import useStyles from "../../../../util/hooks/useStyles";
import { useLoader } from "../../../../util/hooks/loaderHook";
import { useNotificationPanel } from "../../../../util/hooks/notificationPanelHook";
import { useSuccessAlert } from "../../../../util/hooks/successAlert";

export default function AdminEventCreate({
  handleCancel,
  handleEventCreate,
  eventData,
}) {
  const classes = useStyles();
  const notificationPanel = useNotificationPanel();
  const successAlertPanel = useSuccessAlert(handleEventCreate);
  const loader = useLoader();
  const eventHook = useEvent();

  const initial = {
    name: "",
    date: new Date(),
    detail: "",
  };
  const validationSchema = object({
    name: string().required("Name is required"),
    date: string().required("Date is required"),
    detail: string().required("Detail is required"),
  });

  const entityLabel = eventData ? "View/Edit Event" : "Create New Event";
  const buttonText = eventData ? "Update" : "Save";

  async function handleSubmit(values, formikHelpers) {
    notificationPanel.closePanel();

    let parsedDate = new Date(values.date);
    let adjustedDate = new Date(
      parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60000
    );

    const eventData = {
      name: values.name,
      date: adjustedDate,
      detail: values.detail,
    };

    loader.showLoader();
    const createEventResponse = await eventHook.createEvent(eventData);
    loader.closeLoader();

    if (createEventResponse.error) {
      notificationPanel.showPanel(createEventResponse.error);
    } else {
      formikHelpers.resetForm();
      successAlertPanel.showPanel(
        `Event ${createEventResponse.data.name} created successfully`
      );
    }

    //    handleEventCreate();
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
            {entityLabel}
          </Typography>
        </Toolbar>
        <notificationPanel.NotificationPanel />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            className={classes.formLabel}
            required
            fullWidth
            id="name"
            name="name"
            label="Event Name"
            margin="normal"
            type="text"
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.name) && Boolean(formik.touched.name)}
            helperText={Boolean(formik.touched.name) && formik.errors.name}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              sx={{
                marginTop: 2,
              }}
              required
              margin="normal"
              id="date"
              name="date"
              value={dayjs(formik.values.date)}
              label="Event Date"
              disablePast={true}
              onChange={(e) => formik.setFieldValue("date", dayjs(e))}
              onBlur={formik.handleBlur}
              viewRenderers={{
                hours: renderTimeViewClock,
                minutes: renderTimeViewClock,
                seconds: renderTimeViewClock,
              }}
            />
          </LocalizationProvider>
          <TextField
            className={classes.formLabel}
            required
            fullWidth
            id="detail"
            name="detail"
            label="Event Description"
            margin="normal"
            value={formik.values.detail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.detail) && Boolean(formik.touched.detail)
            }
            helperText={Boolean(formik.touched.detail) && formik.errors.detail}
            multiline
            rows={9}
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
              {buttonText}
            </Button>
          </ButtonGroup>
        </form>
        <successAlertPanel.SuccessPanel />
      </Stack>
    </>
  );
}
