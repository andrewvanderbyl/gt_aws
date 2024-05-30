import CloseIcon from "@mui/icons-material/Close";
import { Alert, Collapse, IconButton } from "@mui/material";
import { useState } from "react";

export const useNotificationPanel = () => {
  const [open, setOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState();

  const showPanel = (errorMsg) => {
    setErrorMsg(errorMsg);
    setOpen(true);
  };

  const closePanel = () => {
    setErrorMsg("");
    setOpen(false);
  };

  const NotificationPanel = (props) => (
    <>
      <Collapse in={open} sx={{ width: "100%" }}>
        <Alert
          variant="filled"
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2, width: "100%" }}
        >
          {errorMsg}
        </Alert>
      </Collapse>
    </>
  );

  return { NotificationPanel, showPanel, closePanel };
};
