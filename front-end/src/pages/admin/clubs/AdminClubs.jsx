import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useRef, useState } from "react";
import SlideEntityPanel from "../../../components/SlideEntityPanel";
import ContentPanel from "../../layout/ContentPanel";
import AdminClubCreate from "./AdminClubCreate";
import ClubList from "./ClubList";

export default function AdminClubs() {
  const [contentComponent, setContentComponent] = useState(<ClubList />);
  const slidePanelRef = useRef();

  const handleViewClubsClick = (event) => {
    event.preventDefault();
    setContentComponent(<ClubList />);
  };
  const handleViewCreateClubClick = (event) => {
    event.preventDefault();
    slidePanelRef.current.openDialog();
  };

  const handleCreateFormCancelClick = (event) => {
    event.preventDefault();
    slidePanelRef.current.closeDialog();
  };

  const handleClubCreatedEvent = () => {
    slidePanelRef.current.closeDialog();
    setContentComponent(<ClubList forceRefresh={new Date()} />);
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
        panelContent={
          <AdminClubCreate
            handleCancel={handleCreateFormCancelClick}
            handleClubCreate={handleClubCreatedEvent}
          />
        }
        ref={slidePanelRef}
      />
    </>
  );
}
