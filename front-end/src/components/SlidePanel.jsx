import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Fragment, forwardRef, useImperativeHandle, useState } from "react";

const SlidePanel = forwardRef((props, ref) => {
  const [openDialog, setOpenDialog] = useState(false);
  useImperativeHandle(ref, () => ({
    openDialog() {
      setOpenDialog(true);
    },

    closeDialog() {
      setOpenDialog(false);
    },
  }));

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDialog(open);
  };

  return (
    <div>
      <Fragment key={"right"}>
        <SwipeableDrawer
          anchor={"right"}
          open={openDialog}
          onClose={() => {
            return;
          }}
          onOpen={toggleDrawer(true)}
        >
          {openDialog && props.panelContent}
        </SwipeableDrawer>
      </Fragment>
    </div>
  );
});

export default SlidePanel;
