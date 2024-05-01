import { Paper, Stack } from "@mui/material";
import { useAuth } from "../../../util/context/AuthUserContext";
import ClubPanel from "./home/ClubPanel";
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
      spacing={5}
    >
      {/* <Paper
        elevation={5}
        square={false}
        sx={{
          width: "100%",
          height: "82vh",
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "black",
          },
        }}
      >
        <ClubPanel />
      </Paper> */}

      <Paper
        elevation={5}
        square={false}
        sx={{
          width: "100%",
          height: "82vh",
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "black",
          },
        }}
      >
        <EventPanel />
      </Paper>
      <Paper
        elevation={5}
        square={false}
        sx={{
          width: "100%",
          height: "82vh",
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "black",
          },
        }}
      >
        <RacePanel />
      </Paper>
    </Stack>
  );
}
