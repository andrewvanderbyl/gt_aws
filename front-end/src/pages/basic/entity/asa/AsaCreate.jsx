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
import { useState } from "react";
import { useAsa } from "../../../../util/hooks/asaHook";
import { useAuth } from "../../../../util/context/AuthUserContext";

export default function AsaCreate({ handleCancel, handleAsaCreated }) {
  const [asa, setAsa] = useState("");

  const asaHook = useAsa();
  const authHook = useAuth();
  const loggedInUser = authHook.localStorageValue;

  async function handleSubmit(event) {
    event.preventDefault();

    await asaHook.createAsa({ asa }, loggedInUser.id);
    handleAsaCreated();
  }

  return (
    <Stack sx={{ mt: 2, ml: 5, mr: 5, width: 420 }} spacing={5}>
      <Toolbar sx={{ backgroundColor: "#1C4E80" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          Create New Asa
        </Typography>
      </Toolbar>
      <TextField
        required
        id="asa"
        name="asa"
        label="Asa"
        value={asa}
        onChange={(e) => setAsa(e.target.value)}
        fullWidth
        helperText="ASA Number"
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
