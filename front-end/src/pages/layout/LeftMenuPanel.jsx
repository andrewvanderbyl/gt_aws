import { Box, Divider, Icon, List, Paper } from "@mui/material";
import logo from "../../assets/AppLogo.jpg";
import ListItems from "./MenuItems";

export default function LeftMenuPanel() {
  return (
    <>
      <Paper
        elevation={10}
        square={false}
        // sx={{
        //   backgroundColor: (theme) =>
        //     theme.palette.mode === "light"
        //       ? theme.palette.grey[100]
        //       : theme.palette.grey[900],
        // }}
        // sx={{
        //   width: "13%",
        //   "& .MuiInputBase-input.Mui-disabled": {
        //     WebkitTextFillColor: "black",
        //   },
        // }}
      >
        <Divider sx={{ mt: 3 }} />
        <Icon style={{ fontSize: 20, height: "10%", width: "100%" }}>
          <img src={logo} width={"100%"} height={50} alt="" />
        </Icon>
        {/* <Box
          sx={{
            height: "82vh",
            marginTop: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            boxShadow: "0px 5px 5px",
            borderRadius: "10px",
            // padding: "30px 25px",
          }}
        > */}
        <List>
          <ListItems />
        </List>
        {/* </Box> */}
      </Paper>
    </>
  );
}
