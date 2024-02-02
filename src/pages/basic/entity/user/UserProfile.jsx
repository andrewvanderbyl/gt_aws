import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { deepPurple } from "@mui/material/colors";

export default function UserProfile() {
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
      </Paper>

      <Paper
        elevation={3}
        square={false}
        sx={{ width: "100%", height: "74vh" }}
      >
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
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            helperText="First Name"
            disabled
          />
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            helperText="Last Name"
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
            id="firstName"
            name="firstName"
            label="Username"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            disabled
            helperText="Username"
          />
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Password"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            helperText="Password"
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
        <ButtonGroup
          sx={{
            display: "flex",
            boxShadow: "0",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 20,
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
