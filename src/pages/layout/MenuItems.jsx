import { PowerSettingsNew } from "@mui/icons-material";
import BadgeIcon from "@mui/icons-material/Badge";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
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

export default function ListItems() {
  let navigate = useNavigate();

  const logout = () => {
    navigate("login");
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
      <ListItemButton onClick={logout}>
        <ListItemIcon>
          <PowerSettingsNew />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      <ListSubheader component="div" inset>
        Administration
      </ListSubheader>
      {/* <MenuItem
        menuText={"Privileges"}
        menuIcon={<BadgeIcon />}
        menuClickNav={"privileges"}
      /> */}
      <MenuItem
        menuText={"Clubs"}
        menuIcon={<BusinessIcon />}
        menuClickNav={"/admin/clubs"}
      />
    </React.Fragment>
  );
}
