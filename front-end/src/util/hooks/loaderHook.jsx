import { Backdrop, CircularProgress } from "@mui/material";
import { useState } from "react";

export const useLoader = () => {
  const [open, setOpen] = useState(false);

  const closeLoader = () => {
    setOpen(false);
  };
  const showLoader = () => {
    setOpen(true);
  };

  const LoadingPanel = () => (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );

  return { LoadingPanel, closeLoader, showLoader };
};
