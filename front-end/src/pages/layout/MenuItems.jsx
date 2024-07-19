import { PowerSettingsNew } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import {
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import * as React from "react";
import { useNavigate } from "react-router";
import MenuItem from "../../components/MenuItem";
import { useUser } from "../../util/hooks/userHook";
import { amber } from "@mui/material/colors";
import { useSessionStorage } from "../../util/hooks/sessionStorageHook";

export default function ListItems() {
  let navigate = useNavigate();
  const userHook = useUser();
  const sessionStorage = useSessionStorage();
  const showAdminMenu = sessionStorage.getUserRole().includes("ADMIN");

  const handleLogout = () => {
    userHook.logout();
    navigate("/login");
  };

  return (
    <React.Fragment>
      <MenuItem
        menuText={"Home"}
        menuIcon={<PeopleIcon sx={{ fontSize: 35 }} color="primary" />}
        menuClickNav={"/profile"}
      />
      <MenuItem
        menuText={"Events"}
        menuIcon={<EventAvailableIcon sx={{ fontSize: 35 }} color="success" />}
        menuClickNav={"/events"}
      />
      <MenuItem
        menuText={"ASA Number"}
        menuIcon={<SellIcon sx={{ fontSize: 35 }} color="warning" />}
        menuClickNav={"/asa"}
      />
      <MenuItem
        menuText={"Results"}
        menuIcon={<EmojiEventsIcon sx={{ fontSize: 35, color: amber[500] }} />}
        menuClickNav={"/results"}
      />
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <PowerSettingsNew sx={{ fontSize: 35 }} color="error" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>

      {showAdminMenu ? (
        <>
          <Divider
            sx={{ color: "white", backgroundColor: "white", marginTop: "25px" }}
          />
          <ListSubheader
            component="div"
            // inset
            sx={
              {
                // backgroundColor: "#1C4E80",
                // color: "white",
                // border: 2,
                // borderColor: "black",
              }
            }
          >
            Administration
          </ListSubheader>
          <Divider sx={{ color: "white", backgroundColor: "white" }} />

          <MenuItem
            menuText={"Clubs"}
            menuIcon={<BusinessIcon sx={{ fontSize: 35 }} color="disabled" />}
            menuClickNav={"/admin/clubs"}
          />
          <MenuItem
            menuText={"Events"}
            menuIcon={
              <EventAvailableIcon sx={{ fontSize: 35 }} color="success" />
            }
            menuClickNav={"/admin/events"}
          />
          {/* <MenuItem
        menuText={"Security"}
        menuIcon={<VpnKeyIcon sx={{ fontSize: 35 }} color="error" />}
        menuClickNav={"/admin/security"}
      /> */}
        </>
      ) : null}
    </React.Fragment>
  );
}
