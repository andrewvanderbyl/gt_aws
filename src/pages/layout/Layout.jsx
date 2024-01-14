
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as React from 'react';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';




// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));



// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Layout() {


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
        <Box
          component="main"
          sx={{
            // backgroundColor: 'red',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          {/* <Toolbar>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Toolbar>*/
          <Outlet/>}
        </Box>

      </Box>
      <Footer />

    </ThemeProvider>
  );
}