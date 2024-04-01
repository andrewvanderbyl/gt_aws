import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Fragment } from "react";

export default function SlideEntityPanel({
  panelContent,
  openDialog,
  handleClose,
}) {
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    handleClose(event);
  };

  return (
    <div>
      <Fragment key={"right"}>
        <SwipeableDrawer
          anchor={"right"}
          open={openDialog}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {panelContent}
        </SwipeableDrawer>
      </Fragment>
    </div>
  );
}
