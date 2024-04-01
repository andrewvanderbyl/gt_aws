import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import {
  Button,
  ButtonGroup,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useClub } from "../../../util/hooks/clubHook";

export default function AdminClubCreate({ handleCancel, handleClubCreate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [province, setProvince] = useState("Western Cape");

  const clubHook = useClub();

  async function handleSubmit(event) {
    event.preventDefault();

    const clubData = {
      name,
      email,
      contact,
      province,
      country: "South Africa",
    };

    await clubHook.createClub(clubData);
    handleClubCreate();
  }

  return (
    <Stack sx={{ mt: 2, ml: 5, mr: 5, width: 420 }} spacing={5}>
      <Toolbar sx={{ backgroundColor: "#1C4E80" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          Create New Club
        </Typography>
      </Toolbar>
      <TextField
        required
        id="name"
        name="name"
        label="Club Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        helperText="Name of your club"
        FormHelperTextProps={{
          style: { fontWeight: "bold", fontSize: "10pt" },
        }}
      />
      <TextField
        required
        id="contact"
        name="contact"
        label="Contact Number"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        fullWidth
        helperText="Contact Number (Landline/Cellular)"
        FormHelperTextProps={{
          style: { fontWeight: "bold", fontSize: "10pt" },
        }}
      />
      <TextField
        required
        id="email"
        name="email"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        helperText="Email Address"
        FormHelperTextProps={{
          style: { fontWeight: "bold", fontSize: "10pt" },
        }}
      />
      <FormControl fullWidth>
        <InputLabel key="province" id="province">
          Province
        </InputLabel>
        <Select
          value={province}
          labelId="province"
          label="Select province"
          onChange={(e) => setProvince(e.target.value)}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          {[
            "Eastern Cape",
            "Free State",
            "Gauteng",
            "KwaZulu Natal",
            "Limpopo",
            "Mpumalanga",
            "Northern Cape",
            "North West",
            "Western Cape",
          ].map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
