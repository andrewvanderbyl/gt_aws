import { Paper, Stack } from "@mui/material";
import { useAuth } from "../../../util/context/AuthUserContext";
import EventPanel from "./home/EventPanel";
import RacePanel from "./home/RacePanel";

export default function Home() {
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;

  return (
    <Stack
      direction={"row"}
      maxWidth="xl"
      sx={{ mt: 3, mb: 2 }}
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={3}
    >
      <Paper
        elevation={10}
        square={false}
        sx={{
          width: "100%",
          height: "82vh",
        }}
      >
        <EventPanel />
      </Paper>
      <Paper
        elevation={10}
        square={false}
        sx={{
          width: "100%",
          height: "82vh",
        }}
      >
        <RacePanel />
      </Paper>
    </Stack>
  );
}
