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
import { useAuth } from "../../../../util/context/AuthUserContext";
import { useAsa } from "../../../../util/hooks/asaHook";
import { useLoader } from "../../../../util/hooks/loaderHook";

export default function TimingChipCreate({ asa, handleCancel, handleCreated }) {
  const [tag, setTag] = useState("");
  const loader = useLoader();

  const asaHook = useAsa();
  const authHook = useAuth();
  const loggedInUser = authHook.localStorageValue;

  async function handleSubmit(event) {
    event.preventDefault();

    loader.showLoader();
    await asaHook.createTimingForAsa({ tag }, asa["id"], loggedInUser.id);
    loader.closeLoader();
    handleCreated();
  }

  return (
    <Stack sx={{ mt: 2, ml: 5, mr: 5, width: 420 }} spacing={5}>
      <loader.LoadingPanel />

      <Toolbar sx={{ backgroundColor: "#1C4E80" }}>
        <Typography variant="h6" sx={{ color: "white" }}>
          Create New Chip Entry
        </Typography>
      </Toolbar>
      <TextField
        disabled
        id="asa"
        name="asa"
        value={asa.asa}
        fullWidth
        helperText="Asa Number"
        FormHelperTextProps={{
          style: { fontWeight: "bold", fontSize: "10pt" },
        }}
      />
      <TextField
        required
        id="tag"
        name="tag"
        label="Chip"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        fullWidth
        helperText="Timing Chip"
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
