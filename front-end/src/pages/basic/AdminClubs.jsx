import AddBoxIcon from "@mui/icons-material/AddBox";
import { useState } from "react";
import { useSliderPanel } from "../../util/hooks/sliderPanelHook";
import ClubList from "../basic/entity/clubs/ClubList";
import ContentPanel from "../layout/ContentPanel";
import AdminClubCreate from "./entity/clubs/AdminClubCreate";

export default function AdminClubs() {
  const [contentComponent, setContentComponent] = useState(<ClubList />);
  const slidePanel = useSliderPanel();

  // const handleViewClubsClick = (event) => {
  //   event.preventDefault();
  //   setContentComponent(<ClubList />);
  // };
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
          // {
          //   text: "List",
          //   icon: <ViewListIcon />,
          //   clickHandler: handleViewClubsClick,
          // },
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
          <AdminClubCreate
            handleCancel={handleCreateFormCancelClick}
            handleClubCreate={handleClubCreatedEvent}
          />
        }
      />
    </>
  );
}
