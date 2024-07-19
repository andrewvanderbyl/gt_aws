import AddBoxIcon from "@mui/icons-material/AddBox";
import { useState } from "react";
import { useSliderPanel } from "../../util/hooks/sliderPanelHook";
import ClubList from "../basic/entity/clubs/ClubList";
import ContentPanel from "../layout/ContentPanel";
import AdminClubCreateEdit from "./entity/clubs/AdminClubCreateEdit";

export default function AdminClubs() {
  const [contentComponent, setContentComponent] = useState(<ClubList />);
  const slidePanel = useSliderPanel();

  const handleViewCreateClubClick = (event) => {
    event.preventDefault();
    slidePanel.openPanel();
  };

  const handleCreateFormCancelClick = (event) => {
    event.preventDefault();
    slidePanel.closePanel();
  };

  const handleClubCreatedEvent = () => {
    slidePanel.closePanel();
    setContentComponent(<ClubList forceRefresh={new Date()} />);
  };

  return (
    <>
      <ContentPanel
        entityHeaderText="Clubs"
        entityButtonPanel={[
          {
            text: "Create",
            icon: <AddBoxIcon />,
            clickHandler: handleViewCreateClubClick,
          },
        ]}
        entityComponent={contentComponent}
      />
      <slidePanel.SliderPanel
        panelContent={
          <AdminClubCreateEdit
            handleCancel={handleCreateFormCancelClick}
            handleClubCreate={handleClubCreatedEvent}
          />
        }
      />
    </>
  );
}
