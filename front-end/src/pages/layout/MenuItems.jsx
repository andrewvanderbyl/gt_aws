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
        menuIcon={<PeopleIcon />}
        menuClickNav={"/profile"}
      />
      <MenuItem
        menuText={"Club"}
        menuIcon={<BusinessIcon />}
        menuClickNav={"/clubs"}
      />
      <MenuItem
        menuText={"Future Events"}
        menuIcon={<EventAvailableIcon />}
        menuClickNav={"/events"}
      />
      <MenuItem
        menuText={"ASA Number"}
        menuIcon={<SellIcon />}
        menuClickNav={"/events"}
      />
      <MenuItem
        menuText={"Timing Chip"}
        menuIcon={<MemoryIcon />}
        menuClickNav={"/tags"}
      />
      <MenuItem
        menuText={"Results"}
        menuIcon={<EmojiEventsIcon />}
        menuClickNav={"/results"}
      />
      <ListItemButton onClick={handleLogout}>
        <ListItemIcon>
          <PowerSettingsNew />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      <ListSubheader component="div" inset>
        Administration
      </ListSubheader>
      <MenuItem
        menuText={"Clubs"}
        menuIcon={<BusinessIcon />}
        menuClickNav={"/admin/clubs"}
      />
      <MenuItem
        menuText={"Events"}
        menuIcon={<EventAvailableIcon />}
        menuClickNav={"/admin/events"}
      />
      <MenuItem
        menuText={"Security"}
        menuIcon={<VpnKeyIcon />}
        menuClickNav={"/admin/security"}
      />
    </React.Fragment>
  );
}
