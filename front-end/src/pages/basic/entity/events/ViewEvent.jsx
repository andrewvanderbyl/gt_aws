import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import CancelIcon from "@mui/icons-material/Cancel";

import {
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { DateTimePicker, renderTimeViewClock } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { useAuth } from "../../../../util/context/AuthUserContext";
import { useEvent } from "../../../../util/hooks/eventHook";
import useStyles from "../../../../util/hooks/useStyles";

export default function ViewEvent({ handleCancel, event }) {
  const classes = useStyles();
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;
  const eventHook = useEvent();

  const handleSubscribeClick = async (e) => {
    await eventHook.subscribeUserToEvent(event.id, userData.id);
  };

  return (
    <>
      <Stack
        sx={{
          mt: 2,
          ml: 3,
          mr: 3,
          width: 420,
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "black",
          },
        }}
        spacing={5}
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.toolBarTitle}>
            {event["name"]}
          </Typography>
        </Toolbar>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            disabled
            id="date"
            name="date"
            value={dayjs(event.date)}
            label="Event Date"
            disablePast={true}
            viewRenderers={{
              hours: renderTimeViewClock,
              minutes: renderTimeViewClock,
              seconds: renderTimeViewClock,
            }}
          />
        </LocalizationProvider>
        <TextField
          disabled
          id="standard-multiline-static"
          value={event.detail}
          multiline
          rows={12}
          fullWidth
          label="Event Description"
          InputLabelProps={{
            shrink: true,
            style: { fontWeight: "bold", fontSize: "12pt" },
          }}
        />
        <ButtonGroup
          sx={{
            display: "flex",
            boxShadow: "0",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 10,
          }}
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button startIcon={<CancelIcon />} onClick={handleCancel}>
            Close
          </Button>
          <Button
            sx={{ marginLeft: 5 }}
            startIcon={<AssignmentTurnedInIcon />}
            onClick={handleSubscribeClick}
          >
            Subscribe
          </Button>
        </ButtonGroup>
      </Stack>
    </>
  );
}
