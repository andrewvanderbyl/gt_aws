import { PowerSettingsNew } from "@mui/icons-material";
import BusinessIcon from "@mui/icons-material/Business";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import PeopleIcon from "@mui/icons-material/People";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import SellIcon from "@mui/icons-material/Sell";
import MemoryIcon from "@mui/icons-material/Memory";
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

export default function ListItems() {
  let navigate = useNavigate();
  const userHook = useUser();

  const handleLogout = () => {
    userHook.logout();
    navigate("/login");
  };

  return (
    <React.Fragment>
      <MenuItem
        menuText={"Profile"}
        menuIcon={<PeopleIcon style={{ color: "white" }} />}
        menuClickNav={"/profile"}
      />
      <MenuItem
        menuText={"Club"}
        menuIcon={<BusinessIcon style={{ color: "white" }} />}
        menuClickNav={"/clubs"}
      />
      <MenuItem
        menuText={"Future Events"}
        menuIcon={<EventAvailableIcon style={{ color: "white" }} />}
        menuClickNav={"/events"}
      />
      <MenuItem
        menuText={"ASA Number"}
        menuIcon={<SellIcon style={{ color: "white" }} />}
        menuClickNav={"/events"}
      />
      <MenuItem
        menuText={"Timing Chip"}
        menuIcon={<MemoryIcon style={{ color: "white" }} />}
        menuClickNav={"/tags"}
      />
      <MenuItem
        menuText={"Results"}
        menuIcon={<EmojiEventsIcon style={{ color: "white" }} />}
        menuClickNav={"/results"}
      />
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <PowerSettingsNew style={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>

      <Divider sx={{ color: "white", backgroundColor: "white" }} />

      <ListSubheader
        component="div"
        // inset
        sx={{
          backgroundColor: "#1976d2",
          color: "white",
          // border: 2,
          // borderColor: "black",
        }}
      >
        Administration
      </ListSubheader>
      <Divider sx={{ color: "white", backgroundColor: "white" }} />

      <MenuItem
        menuText={"Clubs"}
        menuIcon={<BusinessIcon style={{ color: "white" }} />}
        menuClickNav={"/admin/clubs"}
      />
      <MenuItem
        menuText={"Events"}
        menuIcon={<EventAvailableIcon style={{ color: "white" }} />}
        menuClickNav={"/admin/events"}
      />
      <MenuItem
        menuText={"Security"}
        menuIcon={<VpnKeyIcon style={{ color: "white" }} />}
        menuClickNav={"/admin/security"}
      />
    </React.Fragment>
  );
}
