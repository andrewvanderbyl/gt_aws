import { Divider, Icon, List, Paper } from "@mui/material";
import ListItems from "./MenuItems";
import logo from "../../assets/AppLogo.jpg";

export default function LeftMenuPanel() {
  return (
    <>
      <Paper
        elevation={5}
        square={false}
        sx={{
          width: "13%",
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "black",
          },
        }}
      >
        <Divider sx={{ mt: 2 }} />

        <Icon style={{ fontSize: 20, height: "10%", width: "100%" }}>
          <img src={logo} width={"100%"} height={50} />
        </Icon>
        <Divider sx={{ mt: 1 }} />
        <List
          sx={{
            height: "84vh",
            backgroundColor: "#1C4E80",
            color: "white",
          }}
        >
          <ListItems />
        </List>
      </Paper>
    </>
  );
}
