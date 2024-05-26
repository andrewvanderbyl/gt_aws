import CancelIcon from "@mui/icons-material/Cancel";
import {
  Button,
  ButtonGroup,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useAuth } from "../../../../util/context/AuthUserContext";

export default function UserProfile({ handleCancel, handleProfileViewed }) {
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;
  const [user, setUser] = useState(userData);

  async function handleSubmit(event) {
    event.preventDefault();

    // await asaHook.createAsa({ asa }, loggedInUser.id);
    handleProfileViewed();
  }

  return (
    <Stack sx={{ mt: 2, ml: 5, mr: 5, width: 420 }} spacing={5}>
      <Toolbar sx={{ backgroundColor: "#1C4E80" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          {user.username}
        </Typography>
      </Toolbar>

      <TextField
        required
        id="firstName"
        name="firstName"
        fullWidth
        autoComplete="given-name"
        variant="standard"
        helperText="First Name"
        value={user.firstName}
        // onChange={(e) => setAsa(e.target.value)}
        FormHelperTextProps={{
          style: { fontWeight: "bold", fontSize: "10pt" },
        }}
      />

      <TextField
        required
        id="lastName"
        name="lastName"
        fullWidth
        autoComplete="family-name"
        variant="standard"
        helperText="Last Name"
        value={user.lastName}
        // onChange={(e) => setAsa(e.target.value)}
        FormHelperTextProps={{
          style: { fontWeight: "bold", fontSize: "10pt" },
        }}
      />

      <TextField
        required
        id="password"
        type="password"
        name="password"
        fullWidth
        autoComplete="family-name"
        variant="standard"
        helperText="Password"
        value={user.password}
        // onChange={(e) => setAsa(e.target.value)}
        FormHelperTextProps={{
          style: { fontWeight: "bold", fontSize: "10pt" },
        }}
      />

      <TextField
        required
        id="contact"
        name="contact"
        fullWidth
        autoComplete="family-name"
        variant="standard"
        helperText="Contact"
        value={user.contact}
        // onChange={(e) => setAsa(e.target.value)}
        FormHelperTextProps={{
          style: { fontWeight: "bold", fontSize: "10pt" },
        }}
      />

      <TextField
        required
        id="email"
        name="email"
        fullWidth
        autoComplete="family-name"
        variant="standard"
        helperText="Email"
        value={user.email}
        // onChange={(e) => setAsa(e.target.value)}
        FormHelperTextProps={{
          style: { fontWeight: "bold", fontSize: "10pt" },
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
          Cancel
        </Button>
        {/* <Button
          type="Submit"
          startIcon={<SaveIcon />}
          sx={{ marginLeft: 5 }}
          onClick={handleSubmit}
        >
          Save
        </Button> */}
      </ButtonGroup>
    </Stack>
  );
}
