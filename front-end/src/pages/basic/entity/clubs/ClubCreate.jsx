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

export default function ClubCreate() {
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
            id="firstName"
            name="firstName"
            label="Name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            helperText="Name of your club"
          />
          {/* <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            helperText="Last Name"
            disabled
          /> */}
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
            id="firstName"
            name="firstName"
            label="Contact"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            disabled
            helperText="Contact"
          />
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Email"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            disabled
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
            <InputLabel id="province-select-label">Province</InputLabel>

            <Select
              // value={age}
              // onChange={handleChange}
              labelId="province-select-label"
              label="Select province"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={10}>Eastern Cape</MenuItem>
              <MenuItem value={20}>Free State</MenuItem>
              <MenuItem value={30}>Gauteng</MenuItem>
              <MenuItem value={40}>KwaZulu-Natal</MenuItem>
              <MenuItem value={50}>Limpopo</MenuItem>
              <MenuItem value={60}>Mpumalanga</MenuItem>
              <MenuItem value={70}>Northern Cape</MenuItem>
              <MenuItem value={80}>North West</MenuItem>
              <MenuItem value={90}>Western Cape</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="lastName"
            name="lastName"
            label="South Africa"
            fullWidth
            autoComplete="family-name"
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
          <Button startIcon={<SaveIcon />} sx={{ marginLeft: 5 }}>
            Save
          </Button>
        </ButtonGroup>
      </Paper>
    </Stack>
  );
}
