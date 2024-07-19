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
import { number, object, string } from "yup";
import { useNotificationPanel } from "../../../../util/hooks/notificationPanelHook";
import { useSuccessAlert } from "../../../../util/hooks/successAlert";
import useStyles from "../../../../util/hooks/useStyles";
import { useUser } from "../../../../util/hooks/userHook";

export default function UserProfile({
  handleCancel,
  handleProfileViewed,
  user,
}) {
  const notificationPanel = useNotificationPanel();
  const successAlertPanel = useSuccessAlert(handleProfileViewed);
  const classes = useStyles();
  const userHook = useUser();

  const initial = user;
  initial.password = "{enc}*****";
  const validationSchema = object({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    username: string().required("Email is required").email("Invalid email"),
    password: string()
      .required("Password is required")
      .min(7, "Minimum 7 characters")
      .max(10, "Maximum 10 characters"),
    contact: number().required("Contact is required"),
  });

  const handleSubmit = async (values, formikHelpers) => {
    const updatedUserProfilePayload = {
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      contact: values.contact,
      username: values.username,
    };

    const updatedUserProfileResponse = await userHook.update(
      updatedUserProfilePayload
    );
    if (updatedUserProfileResponse.error) {
      notificationPanel.showPanel(updatedUserProfileResponse.error);
    } else {
      successAlertPanel.showPanel("Profile updated successfully");
    }
  };

  const formik = useFormik({
    initialValues: initial,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Stack sx={{ mt: 2, ml: 3, mr: 3, width: 420 }} spacing={1}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.toolBarTitle}>
          View / Edit Profile
        </Typography>
      </Toolbar>
      <notificationPanel.NotificationPanel />
      <form onSubmit={formik.handleSubmit}>
        <TextField
          className={classes.formLabel}
          name="firstName"
          required
          fullWidth
          id="firstName"
          label="First Name"
          margin="normal"
          autoFocus
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            Boolean(formik.errors.firstName) &&
            Boolean(formik.touched.firstName)
          }
          helperText={
            Boolean(formik.touched.firstName) && formik.errors.firstName
          }
        />

        <TextField
          className={classes.formLabel}
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          margin="normal"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            Boolean(formik.errors.lastName) && Boolean(formik.touched.lastName)
          }
          helperText={
            Boolean(formik.touched.lastName) && formik.errors.lastName
          }
        />
        <TextField
          className={classes.formLabel}
          required
          fullWidth
          id="username"
          label="Username (Email Address)"
          name="username"
          margin="normal"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            Boolean(formik.errors.username) && Boolean(formik.touched.username)
          }
          helperText={
            Boolean(formik.touched.username) && formik.errors.username
          }
        />
        <TextField
          className={classes.formLabel}
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          margin="normal"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            Boolean(formik.errors.password) && Boolean(formik.touched.password)
          }
          helperText={
            Boolean(formik.touched.password) && formik.errors.password
          }
        />

        <TextField
          className={classes.formLabel}
          required
          fullWidth
          type="number"
          name="contact"
          label="Contact"
          id="contact"
          margin="normal"
          value={formik.values.contact}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            Boolean(formik.errors.contact) && Boolean(formik.touched.contact)
          }
          helperText={Boolean(formik.touched.contact) && formik.errors.contact}
        />

        <ButtonGroup
          sx={{
            display: "flex",
            boxShadow: "0",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 8,
          }}
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button startIcon={<CancelIcon />} onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            type="submit"
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
  );
}
