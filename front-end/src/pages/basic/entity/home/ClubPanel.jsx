import BusinessIcon from "@mui/icons-material/Business";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import { Button, ButtonGroup, Divider, Stack, Typography } from "@mui/material";
import { useAuth } from "../../../../util/context/AuthUserContext";
import { pink } from "@mui/material/colors";

export default function ClubPanel() {
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;

  return (
    <Stack
      direction={"column"}
      maxWidth="xl"
      sx={{ mt: 1, mb: 1 }}
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
      padding={5}
    >
      <Stack
        alignItems="center"
        direction="column"
        // gap={2}
        sx={{ width: "100%" }}
      >
        <BusinessIcon style={{ fontSize: 70 }} sx={{ color: pink[500] }} />
        <Typography variant="h4">CLUB</Typography>
      </Stack>
      <Stack sx={{ width: "100%" }}>
        <Divider sx={{ borderColor: "black", borderWidth: 2 }} />
      </Stack>
      <ButtonGroup
        sx={{
          display: "flex",
          boxShadow: "0",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 15,
        }}
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button startIcon={<CancelIcon />}>Cancel</Button>
        <Button startIcon={<SaveIcon />} sx={{ marginLeft: 5 }}>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
