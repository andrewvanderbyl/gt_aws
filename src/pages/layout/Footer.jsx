import { Toolbar } from "@mui/material";
import { AppBar } from "../../components/AppBar";
import Copyright from "../../components/Copyright";

export default function Footer() {
  return (
    <AppBar
      position="fixed"
      color="primary"
      sx={{
        height: "40px",
        top: "auto",
        bottom: 0,
      }}
    >
      {/* <Toolbar> */}
      <Copyright sx={{ pt: 1, color: "white" }} />

      {/* <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton> */}
      {/* </Toolbar> */}
    </AppBar>
  );
}
