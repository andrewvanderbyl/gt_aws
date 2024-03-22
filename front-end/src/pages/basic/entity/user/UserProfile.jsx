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
import { useAuth } from "../../../../util/context/AuthUserContext";

export default function UserProfile() {
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;

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
        sx={{
          width: "100%",
          height: "74vh",
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "black",
          },
        }}
      >
        <Stack
          direction={"column"}
          //   spacing={20}
          marginLeft={10}
          marginRight={10}
          marginTop={3}
        >
          <Typography variant="h6">PROFILE:</Typography>
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
            fullWidth
            autoComplete="given-name"
            variant="standard"
            helperText="First Name"
            value={userData.firstName}
            disabled
          />
          <TextField
            required
            id="lastName"
            name="lastName"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            helperText="Last Name"
            value={userData.lastName}
            disabled
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
            id="userName"
            name="userName"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={userData.username}
            disabled
            helperText="Username"
          />
          <TextField
            required
            type="password"
            id="password"
            name="password"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            helperText="Password"
            value={userData.password}
            disabled
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
            fullWidth
            autoComplete="given-name"
            variant="standard"
            disabled
            value={userData.contact}
            helperText="Contact"
          />
          <TextField
            required
            id="email"
            name="email"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            disabled
            value={userData.email}
            helperText="Email"
          />
        </Stack>
        <Stack
          direction={"column"}
          spacing={0}
          marginLeft={10}
          marginRight={10}
          marginTop={2}
        >
          <Typography variant="h6">Club:</Typography>
          <Divider sx={{ borderColor: "black", borderWidth: 2 }} />
        </Stack>
        <Stack
          direction={"column"}
          spacing={0}
          marginLeft={10}
          marginRight={10}
          marginTop={2}
        >
          <TextField
            required
            id="club"
            name="lastName"
            label="Club"
            fullWidth
            autoComplete=""
            variant="standard"
            disabled
            helperText="Club Name"
          />
        </Stack>
        <ButtonGroup
          sx={{
            display: "flex",
            boxShadow: "0",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 3,
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
