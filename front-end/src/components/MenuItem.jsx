import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

function MenuItem(props) {
  return (
    <ListItemButton href={props.menuClickNav}>
      <ListItemIcon>{props.menuIcon}</ListItemIcon>
      <ListItemText
        primary={props.menuText}
        primaryTypographyProps={{ fontSize: "12pt" }}
      />
    </ListItemButton>
  );
}

export default MenuItem;
