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
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Copyright from '../components/Copyright';

const defaultTheme = createTheme();

export default function SignIn() {

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

    if (data.get('email') && data.get('password')) {
      navigate("/");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
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
            Sign in
          </Typography>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formValues.email.value}
              onChange={handleChange}
              helperText={formValues.email.error && formValues.email.errorMsg}
              error={formValues.email.error}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={formValues.password.value}
              onChange={handleChange}
              helperText={formValues.password.error && formValues.password.errorMsg}
              error={formValues.password.error}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={formSubmitDisable}
            >
              Sign In
            </Button>
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
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}