import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
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
import { useState } from "react";
import { useEvent } from "../../../../util/hooks/eventHook";

export default function AdminEventCreate({ handleCancel, handleEventCreate }) {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState(new Date());

  const eventHook = useEvent();

  async function handleSubmit(event) {
    event.preventDefault();

    let parsedDate = new Date(date);
    let adjustedDate = new Date(
      parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60000
    );

    const eventData = {
      name,
      date: adjustedDate,
      detail,
    };

    await eventHook.createEvent(eventData);
    handleEventCreate();
  }

  return (
    <Stack sx={{ mt: 2, ml: 5, mr: 5, width: 420 }} spacing={5}>
      <Toolbar sx={{ backgroundColor: "#1C4E80" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          Create New Event
        </Typography>
      </Toolbar>
      <TextField
        required
        id="name"
        name="name"
        label="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        helperText="Name of the Event"
        FormHelperTextProps={{
          style: { fontWeight: "bold", fontSize: "10pt" },
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateTimePicker
          id="date"
          name="date"
          value={dayjs(date)}
          label="Event Date"
          disablePast={true}
          onChange={(value) => setDate(dayjs(value))}
          viewRenderers={{
            hours: renderTimeViewClock,
            minutes: renderTimeViewClock,
            seconds: renderTimeViewClock,
          }}
          // slotProps={{
          //   textField: {
          //     helperText: "Event Date",
          //   },
          // }}
        />
      </LocalizationProvider>
      <TextField
        id="standard-multiline-static"
        label="Event Description"
        value={detail}
        onChange={(e) => setDetail(e.target.value)}
        multiline
        rows={9}
        fullWidth
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
          Cancel
        </Button>
        <Button
          type="Submit"
          startIcon={<SaveIcon />}
          sx={{ marginLeft: 5 }}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
