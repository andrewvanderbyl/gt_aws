import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import ContentPanel from "../../layout/ContentPanel";
import ClubCreate from "./ClubCreate";
import ClubList from "./ClubList";
import SlideEntityPanel from "../../../components/SlideEntityPanel";

export default function AdminClubs() {
  const [contentComponent, setContentComponent] = useState(<ClubList />);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClose = (event) => {
    console.log("I called");
    setOpenDialog(false);
  };

  const handleViewClubsClick = (event) => {
    event.preventDefault();
    setContentComponent(<ClubList />);
  };
  const handleViewCreateClubClick = (event) => {
    event.preventDefault();
    setOpenDialog(true);
  };

  return (
    <>
      <ContentPanel
        entityHeaderText="Clubs"
        entityButtonPanel={[
          {
            text: "List",
            icon: <ViewListIcon />,
            clickHandler: handleViewClubsClick,
          },
          {
            text: "Create",
            icon: <AddBoxIcon />,
            clickHandler: handleViewCreateClubClick,
          },
        ]}
        entityComponent={contentComponent}
      />
      <SlideEntityPanel
        panelContent={<ClubCreate />}
        openDialog={openDialog}
        handleClose={handleClose}
        setOpenDialog={setOpenDialog}
      />
    </>
  );
}
