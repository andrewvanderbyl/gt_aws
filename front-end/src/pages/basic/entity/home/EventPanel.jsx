import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import FiberNewIcon from "@mui/icons-material/FiberNew";
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
import { useEvent } from "../../../../util/hooks/eventHook";

export default function EventPanel() {
  const eventHook = useEvent();
  const [events, setEvents] = useState({ data: [] });

  useEffect(() => {
    (async () => {
      const newRows = await eventHook.fetchUserEvents("UPCOMING", {
        page: 0,
        size: 5,
      });

      setEvents(newRows.data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function conditionalRender() {
    if (events.data.length === 0) {
      return (
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <InfoIcon style={{ fontSize: 50 }} color="primary" />
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
              </React.Fragment>
            }
          />
        </ListItem>
      );
    }

    const eventPanels = events.data.map((event) => {
      const d = new Date(Date.parse(event.date));

      const eventDate = d.toLocaleString("en-ZA", {
        dateStyle: "full",
        timeStyle: "short",
      });
      return (
        <React.Fragment key={event.id}>
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
                    variant="body1"
                    color="text.primary"
                  >
                    {eventDate}
                  </Typography>
                  `: {event.detail.slice(0, 30)} ...`
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
