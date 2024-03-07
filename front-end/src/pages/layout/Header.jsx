import { Divider, List, Toolbar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";
import ListItems from "./MenuItems";

const drawerWidth = 200;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(3),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(6),
      },
    }),
  },
}));

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
        {/* <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        > */}
        {/* <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton> */}
        {/* </Toolbar> */}
        <Divider sx={{ mt: 8 }} />
        <List sx={{ height: "90vh" }}>
          <ListItems />
        </List>
      </Drawer>
    </>
  );
}
