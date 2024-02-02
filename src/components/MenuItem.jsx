import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";

function MenuItem(props) {
  return (
    <ListItemButton href={props.menuClickNav}>
      <ListItemIcon>{props.menuIcon}</ListItemIcon>
      <ListItemText primary={props.menuText} />
    </ListItemButton>
  );
}

export default MenuItem;
