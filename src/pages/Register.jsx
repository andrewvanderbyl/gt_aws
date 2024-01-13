import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import Copyright from '../components/Copyright';
import { useState } from 'react';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Register() {

  let navigate = useNavigate();

  const [formSubmitDisable, setFormSubmitDisable] = useState(true)
  const [formValues, setFormValues] = useState({
    email: {
      value: '',
      error: false,
      errorMsg: 'Email is required',
      isValid(newVal) {
        return !(!!newVal && /\S+@\S+\.\S+/.test(newVal));
      }
    },
    password: {
      value: '',
      error: false,
      errorMsg: 'Password is required',
      isValid(newVal) {
        return !(!!newVal);
      }
    },
    firstName: {
      value: '',
      error: false,
      errorMsg: 'First name is required',
      isValid(newVal) {
        return !(!!newVal);
      }
    },
    lastName: {
      value: '',
      error: false,
      errorMsg: 'Last name is required',
      isValid(newVal) {
        return !(!!newVal);
      }
    }
  });

  const handleChange = (event) => {
    const {name, value} = event.target;

    let errors = []

    Object.keys(formValues).forEach((item) => {
      if (name === item) {
        let tempError = formValues[name].isValid(value);
        setFormValues({
          ...formValues,
          [name]: {
            ...formValues[name],
            value,
            error: tempError
          }
        });
        
        errors.push(tempError)
      } else {
        errors.push(formValues[item].isValid(formValues[item].value));
      }
    });

    setFormSubmitDisable(errors.some((item) => item === true));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          noValidate
          autoComplete="off"
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: '0 14px 28px',
            borderRadius: '10px',
            padding: '30px 25px'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  value={formValues.firstName.value}
                  onChange={handleChange}
                  helperText={formValues.firstName.error && formValues.firstName.errorMsg}
                  error={formValues.firstName.error}
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
                  value={formValues.lastName.value}
                  onChange={handleChange}
                  helperText={formValues.lastName.error && formValues.lastName.errorMsg}
                  error={formValues.lastName.error}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formValues.email.value}
                  onChange={handleChange}
                  helperText={formValues.email.error && formValues.email.errorMsg}
                  error={formValues.email.error}
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
                  autoComplete="new-password"
                  value={formValues.password.value}
                  onChange={handleChange}
                  helperText={formValues.password.error && formValues.password.errorMsg}
                  error={formValues.password.error}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={formSubmitDisable}
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
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}