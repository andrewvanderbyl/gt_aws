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
      <Copyright sx={{ pt: 1, color: "white" }} />
    </AppBar>
  );
}
