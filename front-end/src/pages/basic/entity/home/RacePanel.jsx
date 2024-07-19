import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import InfoIcon from "@mui/icons-material/Info";
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { amber } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { useResult } from "../../../../util/hooks/resultsHook";

export default function RacePanel() {
  const raceHook = useResult();

  const [races, setRaces] = useState({ data: [] });

  useEffect(() => {
    (async () => {
      const newRows = await raceHook.fetchRacesList({
        page: 0,
        size: 5,
      });

      setRaces(newRows.data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function conditionalRender() {
    if (races.data.length === 0) {
      return (
        <React.Fragment key={1}>
          <ListItem alignItems="flex-start" key={1}>
            <ListItemAvatar>
              <InfoIcon style={{ fontSize: 50 }} color="primary" />
            </ListItemAvatar>
            <ListItemText
              primary="You haven't participated in any Race(s) yet"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Participate in an event
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </React.Fragment>
      );
    }
    const eventPanels = races.data.map((race) => {
      const raceName = `${race.name} (${race.details})`;
      const detail = `Position: ${race.position}, Timing: ${race.timing}`;
      return (
        <React.Fragment key={race.id}>
          <ListItem alignItems="flex-start" key={race.id}>
            <ListItemAvatar>
              <DirectionsRunIcon style={{ fontSize: 50, color: amber[500] }} />
            </ListItemAvatar>
            <ListItemText
              primary={raceName}
              secondary={
                <React.Fragment key={race.id}>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {detail}
                  </Typography>
                  `: {race.date}`
                </React.Fragment>
              }
            />
          </ListItem>
        </React.Fragment>
      );
    });
    return eventPanels;
  }

  return (
    <Stack
      direction={"column"}
      maxWidth="xl"
      sx={{ mt: 1, mb: 1 }}
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
      padding={5}
    >
      <Stack alignItems="center" direction="row" sx={{ width: "100%" }}>
        <EmojiEventsIcon
          style={{ fontSize: 60 }}
          sx={{ color: amber[500], marginRight: 15 }}
        />
        <Typography variant="h4">RESULTS</Typography>
      </Stack>
      <Stack sx={{ width: "100%" }}>
        <Divider sx={{ borderColor: "black", borderWidth: 2 }} />
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {conditionalRender()}
        </List>
      </Stack>
    </Stack>
  );
}
