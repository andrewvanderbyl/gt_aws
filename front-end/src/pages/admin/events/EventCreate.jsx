import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useClub } from "../../../util/hooks/clubHook";

export default function EventCreate() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [province, setProvince] = useState("Western Cape");
  const [country, setCountry] = useState("South Africa");

  const clubHook = useClub();

  async function handleSubmit(event) {
    event.preventDefault();

    const clubData = {
      name,
      email,
      contact,
      province,
      country,
    };

    const storedClub = await clubHook.createClub(clubData);
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
            <DatePicker
              id="date"
              name="date"
              label="Event Date"
              disablePast="true"
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
            multiline
            rows={9}
            defaultValue=""
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
