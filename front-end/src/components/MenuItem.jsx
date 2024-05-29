import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

function MenuItem(props) {
  return (
    <ListItem disablePadding>
      <ListItemButton href={props.menuClickNav}>
        <ListItemIcon>{props.menuIcon}</ListItemIcon>
        <ListItemText
          primary={props.menuText}
          primaryTypographyProps={{ fontSize: "12pt" }}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default MenuItem;
