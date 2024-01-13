import { Toolbar } from "@mui/material";
import Copyright from "../../components/Copyright";
import { AppBar } from "../../components/AppBar";

export default function Footer() {
    return (
        <AppBar position="fixed" color="primary" 
        sx={{ height: '50px', 
              top: 'auto', 
              bottom: 0,
            //   backgroundColor: 'green' 
        }}>
        <Toolbar>
          <Copyright sx={{ pt: 1, color: 'white'}} />
          
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
        </Toolbar>
      </AppBar>
    );
}