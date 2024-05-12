import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FiberNewIcon from "@mui/icons-material/FiberNew";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
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
import React, { useEffect, useState } from "react";
import { useAuth } from "../../../../util/context/AuthUserContext";
import { useEvent } from "../../../../util/hooks/eventHook";

export default function EventPanel() {
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;
  const eventHook = useEvent();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    (async () => {
      const newRows = await eventHook.fetchUserEvents(
        "UPCOMING",
        {
          page: 0,
          size: 5,
        },
        userData.id
      );

      setEvents(newRows.data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function conditionalRender() {
    if (events.length === 0) {
      return (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <InfoIcon style={{ fontSize: 50 }} color="primary" />
            {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
          </ListItemAvatar>
          <ListItemText
            primary="New Event(s) will be published soon."
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Watch the space for new events.
                </Typography>
                {/* {" — Watch the space..."} */}
              </React.Fragment>
            }
          />
        </ListItem>
      );
    }
    const eventPanels = events.map((event) => {
      return (
        <ListItem alignItems="flex-start" key={event.id}>
          <ListItemAvatar>
            <FiberNewIcon style={{ fontSize: 50 }} color="success" />
          </ListItemAvatar>
          <ListItemText
            primary={event.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {event.date}
                </Typography>
                `: {event.detail.slice(0, 30)} ...`
              </React.Fragment>
            }
          />
        </ListItem>
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
      <Stack
        alignItems="center"
        direction="row"
        // gap={2}
        sx={{ width: "100%" }}
      >
        <EventAvailableIcon
          style={{ fontSize: 60 }}
          sx={{ marginRight: 15 }}
          color="success"
        />
        <Typography variant="h4">EVENTS</Typography>
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
