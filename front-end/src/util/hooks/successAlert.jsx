import { Alert, Snackbar } from "@mui/material";
import { useState } from "react";

export const useSuccessAlert = (handleCloseEvent) => {
  const [open, setOpen] = useState(false);
  const [infoMsg, setInfoMsg] = useState();

  const showPanel = (infoMsg) => {
    setInfoMsg(infoMsg);
    setOpen(true);
  };

  const closePanel = () => {
    setInfoMsg("");
    setOpen(false);
  };

  const handleClose = () => {
    setInfoMsg("");
    setOpen(false);
    handleCloseEvent();
  };

  const SuccessPanel = () => (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {infoMsg}
        </Alert>
      </Snackbar>
    </>
  );

  return { SuccessPanel, showPanel, closePanel };
};
