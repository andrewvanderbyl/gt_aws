import { Icon } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router";
import { object, string } from "yup";
import logo from "../../assets/AppLogo.jpg";
import { useUser } from "../../util/hooks/userHook";

const SignIn = () => {
  let navigate = useNavigate();

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
    console.log(values);
    await userHook.login({
      username: values.email,
      password: values.password,
    });
    navigate("/");
  };

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
        <Formik
          initialValues={initial}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ errors, isValid, touched, dirty }) => (
            <Form>
              <Field
                name="email"
                type="email"
                as={TextField}
                label="Email Address"
                required
                fullWidth
                margin="normal"
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />
              <Field
                name="password"
                type="password"
                as={TextField}
                label="Password"
                required
                fullWidth
                margin="normal"
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!dirty || !isValid}
              >
                Sign In
              </Button>
            </Form>
          )}
        </Formik>

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
