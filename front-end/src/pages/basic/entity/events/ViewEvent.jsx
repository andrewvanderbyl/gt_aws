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

export default function ViewEvent({ handleCancel, event }) {
  return (
    <Stack
      sx={{
        mt: 2,
        ml: 5,
        mr: 5,
        width: 420,
        "& .MuiInputBase-input.Mui-disabled": {
          WebkitTextFillColor: "black",
        },
      }}
      spacing={5}
    >
      <Toolbar sx={{ backgroundColor: "#1C4E80" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
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
        // variant="standard"
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
      </ButtonGroup>
    </Stack>
  );
}
