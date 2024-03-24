import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  ButtonGroup,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useState } from "react";
import { useEvent } from "../../../util/hooks/eventHook";
import dayjs from "dayjs";
import { DateTimePicker, renderTimeViewClock } from "@mui/x-date-pickers";

export default function EventCreate() {
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [date, setDate] = useState(new Date());

  const eventHook = useEvent();

  async function handleSubmit(event) {
    event.preventDefault();

    let parsedDate = new Date(date);
    console.log(parsedDate);
    let adjustedDate = new Date(
      parsedDate.getTime() - parsedDate.getTimezoneOffset() * 60000
    );

    const eventData = {
      name,
      date: adjustedDate,
      detail,
    };

    const storedEvent = await eventHook.createEvent(eventData);
  }

  return (
    <Stack
      direction={"row"}
      maxWidth="xl"
      sx={{ mt: 3, mb: 3, height: "75vh" }}
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={5}
    >
      <Paper
        elevation={3}
        square={false}
        sx={{ width: "100%", height: "74vh" }}
      >
        <Stack
          direction={"column"}
          //   spacing={20}
          marginLeft={10}
          marginRight={10}
          marginTop={3}
        >
          <Typography variant="h6">EVENT:</Typography>
          <Divider sx={{ borderColor: "black", borderWidth: 2 }} />
        </Stack>
        <Stack
          direction={"row"}
          spacing={20}
          marginLeft={10}
          marginRight={10}
          marginTop={3}
        >
          <TextField
            required
            id="name"
            name="name"
            label="Event Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        </Stack>
        <Stack
          direction={"row"}
          spacing={20}
          marginLeft={10}
          marginRight={10}
          marginTop={3}
        >
          <TextField
            id="standard-multiline-static"
            label="Event Description"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            multiline
            rows={9}
            fullWidth
          />
        </Stack>

        <ButtonGroup
          sx={{
            display: "flex",
            boxShadow: "0",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 7,
          }}
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button startIcon={<CancelIcon />}>Cancel</Button>
          <Button
            type="Submit"
            startIcon={<SaveIcon />}
            sx={{ marginLeft: 5 }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </ButtonGroup>
      </Paper>
    </Stack>
  );
}
