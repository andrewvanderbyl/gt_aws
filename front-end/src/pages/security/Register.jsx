import { Icon } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { number, object, string } from "yup";
import logo from "../../assets/AppLogo.jpg";
import { useAuth } from "../../util/context/AuthUserContext";
import { useUser } from "../../util/hooks/userHook";

const defaultTheme = createTheme();

export default function Register() {
  let navigate = useNavigate();

  const authUserContext = useAuth();
  const userHook = useUser();
  const initial = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    contact: "",
  };
  const validationSchema = object({
    firstName: string().required("First Name is required"),
    lastName: string().required("Last Name is required"),
    email: string().required("Email is required").email("Invalid email"),
    password: string()
      .required("Password is required")
      .min(7, "Minimum 7 characters")
      .max(10, "Maximum 10 characters"),
    contact: number().required("Contact is required"),
  });

  const handleSubmit = async (values, formikHelpers) => {
    const createUserPayload = {
      email: values.email,
      password: values.password,
      firstName: values.firstName,
      lastName: values.lastName,
      contact: values.contact,
      username: values.email,
    };

    const registeredUserData = await userHook.register(createUserPayload);
    authUserContext.setStorageValue(registeredUserData);
    navigate("/");
  };

  const formik = useFormik({
    initialValues: initial,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          autoComplete="off"
          sx={{
            marginTop: 8,
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
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
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
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    Boolean(formik.errors.lastName) &&
                    Boolean(formik.touched.lastName)
                  }
                  helperText={
                    Boolean(formik.touched.lastName) && formik.errors.lastName
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    Boolean(formik.errors.email) &&
                    Boolean(formik.touched.email)
                  }
                  helperText={
                    Boolean(formik.touched.email) && formik.errors.email
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="number"
                  name="contact"
                  label="Contact"
                  id="contact"
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    Boolean(formik.errors.contact) &&
                    Boolean(formik.touched.contact)
                  }
                  helperText={
                    Boolean(formik.touched.contact) && formik.errors.contact
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={!formik.dirty || !formik.isValid}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
