import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { useEffect } from "react";
import { number, object, string } from "yup";
import { useClub } from "../../../../util/hooks/clubHook";
import { useLoader } from "../../../../util/hooks/loaderHook";
import { useNotificationPanel } from "../../../../util/hooks/notificationPanelHook";
import { useSuccessAlert } from "../../../../util/hooks/successAlert";
import useStyles from "../../../../util/hooks/useStyles";

export default function AdminClubCreateEdit({
  handleCancel,
  handleClubCreate,
  club,
}) {
  const initial = {
    name: "",
    email: "",
    contact: "",
    province: "Western Cape",
    country: "South Africa",
  };
  const validationSchema = object({
    name: string().required("Name is required"),
    email: string().required("Email is required").email("Invalid email"),
    contact: number().required("Contact is required"),
    province: string().required("Province is required"),
  });

  const classes = useStyles();
  const notificationPanel = useNotificationPanel();
  const successAlertPanel = useSuccessAlert(handleClubCreate);
  const clubHook = useClub();
  const loader = useLoader();

  const clubLabel = club ? "View/Edit Club" : "Create New Club";
  const buttonText = club ? "Update" : "Save";

  const handleSubmit = async (values, formikHelpers) => {
    notificationPanel.closePanel();
    const clubData = {
      name: values.name,
      email: values.email,
      contact: values.contact,
      province: values.province,
      country: "South Africa",
    };

    loader.showLoader();
    var createClubResponse;
    if (club) {
      clubData.id = club.id;
      createClubResponse = await clubHook.updateClub(clubData);
    } else {
      createClubResponse = await clubHook.createClub(clubData);
    }
    loader.closeLoader();

    if (createClubResponse.error) {
      notificationPanel.showPanel(createClubResponse.error);
    } else {
      formikHelpers.resetForm();
      const msgText = club
        ? `Club ${createClubResponse.data.name} updated successfully`
        : `Club ${createClubResponse.data.name} created successfully`;
      successAlertPanel.showPanel(msgText);
    }
  };

  const formik = useFormik({
    initialValues: initial,
    validationSchema,
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    notificationPanel.closePanel();
    if (club) {
      formik.setValues({
        name: club.name,
        email: club.email,
        contact: club.contact,
        province: club.province,
      });
    }
  }, [club]);

  return (
    <>
      <loader.LoadingPanel />
      <Stack sx={{ mt: 2, ml: 3, mr: 3, width: 420 }} spacing={3}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.toolBarTitle}>
            {clubLabel}
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
            label="Club Name"
            margin="normal"
            type="text"
            autoFocus
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors.name) && Boolean(formik.touched.name)}
            helperText={Boolean(formik.touched.name) && formik.errors.name}
          />
          <TextField
            className={classes.formLabel}
            required
            fullWidth
            id="contact"
            name="contact"
            label="Contact Number"
            margin="normal"
            type="number"
            value={formik.values.contact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.contact) && Boolean(formik.touched.contact)
            }
            helperText={
              Boolean(formik.touched.contact) && formik.errors.contact
            }
          />
          <TextField
            className={classes.formLabel}
            required
            fullWidth
            id="email"
            name="email"
            label="Email Address"
            margin="normal"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.email) && Boolean(formik.touched.email)
            }
            helperText={Boolean(formik.touched.email) && formik.errors.email}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel key="province" id="provinceLabel">
              Province
            </InputLabel>
            <Select
              value={formik.values.province}
              id="province"
              labelId="province"
              label="Select province"
              onChange={(e) => formik.setFieldValue("province", e.target.value)}
              onBlur={formik.handleBlur}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              {[
                "Eastern Cape",
                "Free State",
                "Gauteng",
                "KwaZulu Natal",
                "Limpopo",
                "Mpumalanga",
                "Northern Cape",
                "North West",
                "Western Cape",
              ].map((key) => (
                <MenuItem key={key} value={key}>
                  {key}
                </MenuItem>
              ))}
            </Select>
            {formik.touched.province && (
              <FormHelperText sx={{ color: "error.main" }}>
                {formik.errors.province}
              </FormHelperText>
            )}
          </FormControl>
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
              type="submit"
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
