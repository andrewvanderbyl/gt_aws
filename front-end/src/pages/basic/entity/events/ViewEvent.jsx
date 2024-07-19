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
import { useEvent } from "../../../../util/hooks/eventHook";
import { useLoader } from "../../../../util/hooks/loaderHook";
import { useSuccessAlert } from "../../../../util/hooks/successAlert";
import useStyles from "../../../../util/hooks/useStyles";

export default function ViewEvent({
  handleCancel,
  event,
  showSubscribe,
  handleEventSubscribed,
}) {
  const classes = useStyles();
  const eventHook = useEvent();
  const loader = useLoader();
  const successAlertPanel = useSuccessAlert(handleEventSubscribed);

  const handleSubscribeClick = async (e) => {
    loader.showLoader();
    await eventHook.subscribeUserToEvent(event.id);
    loader.closeLoader();
    successAlertPanel.showPanel("Subscribed successfully to event");
  };

  return (
    <>
      <loader.LoadingPanel />
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
          {showSubscribe ? (
            <Button
              sx={{ marginLeft: 5 }}
              startIcon={<AssignmentTurnedInIcon />}
              onClick={handleSubscribeClick}
            >
              Subscribe
            </Button>
          ) : null}
        </ButtonGroup>
        <successAlertPanel.SuccessPanel />
      </Stack>
    </>
  );
}
