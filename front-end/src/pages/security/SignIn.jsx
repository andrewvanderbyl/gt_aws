import { Icon } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { object, string } from "yup";
import logo from "../../assets/AppLogo.jpg";
import { useNotificationPanel } from "../../util/hooks/notificationPanelHook";
import { useUser } from "../../util/hooks/userHook";

const SignIn = () => {
  let navigate = useNavigate();
  const notificationPanel = useNotificationPanel();

  const userHook = useUser();
  const initial = {
    email: "",
    password: "",
  };
  const validationSchema = object({
    email: string().required("Email is required").email("Invalid email"),
    password: string()
      .required("Password is required")
      .min(7, "Minimum 7 characters")
      .max(10, "Maximum 10 characters"),
  });

  const handleSubmit = async (values, formikHelpers) => {
    const response = await userHook.login({
      username: values.email,
      password: values.password,
    });
    if (response.status === 200) {
      navigate("/");
    } else {
      console.log(response);
      notificationPanel.showPanel(response.payload);
    }
  };

  const formik = useFormik({
    initialValues: initial,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 15,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 14px 28px",
          borderRadius: "10px",
          padding: "30px 25px",
        }}
      >
        <Icon style={{ fontSize: 20, height: "20%", width: "100%" }}>
          <img src={logo} width={"100%"} height={80} alt="" />
        </Icon>
        <notificationPanel.NotificationPanel />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            required
            fullWidth
            id="email"
            type="email"
            label="Email Address"
            name="email"
            margin="normal"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.email) && Boolean(formik.touched.email)
            }
            helperText={Boolean(formik.touched.email) && formik.errors.email}
          />
          <TextField
            required
            fullWidth
            id="password"
            type="password"
            label="Password"
            name="password"
            margin="normal"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              Boolean(formik.errors.password) &&
              Boolean(formik.touched.password)
            }
            helperText={
              Boolean(formik.touched.password) && formik.errors.password
            }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!formik.dirty || !formik.isValid}
          >
            Sign In
          </Button>
        </form>

        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="register" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SignIn;
