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
import { useClub } from "../../../../util/hooks/clubHook";
import { useLocalStorage } from "../../../../util/hooks/localStorageHook";

export default function ClubCreate() {
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
      {/* <Paper
        elevation={3}
        square={false}
        sx={{ width: "35vh", height: "74vh" }}
      >
        <Card sx={{ boxShadow: 0 }}>
          <CardActionArea>
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: deepPurple[500],
                    width: "30vh",
                    height: "25vh",
                  }}
                  variant="square"
                >
                  ML
                </Avatar>
              }
            ></CardHeader>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <Button
                component="label"
                variant="contained"
                startIcon={<EditIcon />}
              >
                Edit Profile
              </Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </Paper> */}

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
          <Typography variant="h6">CLUB:</Typography>
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
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            variant="standard"
            helperText="Name of your club"
          />
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
            id="contact"
            name="contact"
            label="Contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            fullWidth
            variant="standard"
            helperText="Contact Number"
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
            variant="standard"
            helperText="Email"
          />
        </Stack>
        <Stack
          direction={"row"}
          spacing={20}
          marginLeft={10}
          marginRight={10}
          marginTop={3}
        >
          <FormControl fullWidth>
            <InputLabel id="province">Province</InputLabel>

            <Select
              value={province}
              // onChange={handleChange}
              labelId="province"
              label="Select province"
              onChange={(e) => setProvince(e.target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"Eastern Cape"}>Eastern Cape</MenuItem>
              <MenuItem value={"Free State"}>Free State</MenuItem>
              <MenuItem value={"Gauteng"}>Gauteng</MenuItem>
              <MenuItem value={"KwaZulu-Natal"}>KwaZulu-Natal</MenuItem>
              <MenuItem value={"Limpopo"}>Limpopo</MenuItem>
              <MenuItem value={"Mpumalanga"}>Mpumalanga</MenuItem>
              <MenuItem value={"Northern Cape"}>Northern Cape</MenuItem>
              <MenuItem value={"North West"}>North West</MenuItem>
              <MenuItem value={"Western Cape"}>Western Cape</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="country"
            name="country"
            label="South Africa"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            fullWidth
            variant="standard"
            helperText="Country"
            disabled
          />
        </Stack>

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
