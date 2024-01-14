import { PowerSettingsNew } from "@mui/icons-material";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Divider, IconButton, List, Toolbar, Typography } from "@mui/material";
import MuiDrawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import { useNavigate } from "react-router";
import { AppBar } from "../../components/AppBar";
import ListItems from "./MenuItems";

const drawerWidth = 200;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(5),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

export default function Header() {

    // const [open, setOpen] = useState(true);
    // const toggleDrawer = () => {
    //   setOpen(!open);
    // };
  
    // let navigate = useNavigate();
  
    // const logout = () => {
    //   navigate('login');
    // }

    return (
        <>
          <Drawer variant="permanent" open={true}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              {/* <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton> */}
            </Toolbar>
            <Divider />
            <List component="nav">
              <ListItems />
            </List>
        </Drawer>
        </>
    );
}