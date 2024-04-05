import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import { useSliderPanel } from "../../util/hooks/sliderPanelHook";
import ContentPanel from "../layout/ContentPanel";
import AdminEventCreate from "./entity/events/AdminEventCreate";
import FutureEventList from "./entity/events/FutureEventList";
import PastEventList from "./entity/events/PastEventList";

export default function AdminEvents() {
  const [contentComponent, setContentComponent] = useState(<FutureEventList />);
  const slidePanel = useSliderPanel();

  const handleViewFutureEventsClick = (event) => {
    setContentComponent(<FutureEventList />);
  };
  const handleViewPastEventsClick = (event) => {
    setContentComponent(<PastEventList />);
  };
  const handleViewCreateEventClick = (event) => {
    event.preventDefault();
    slidePanel.openPanel();
  };

  const handleCreateFormCancelClick = (event) => {
    event.preventDefault();
    slidePanel.closePanel();
  };

  const handleEventCreatedEvent = () => {
    slidePanel.closePanel();
    setContentComponent(<FutureEventList forceRefresh={new Date()} />);
  };

  return (
    <>
      <ContentPanel
        entityHeaderText="Events"
        entityButtonPanel={[
          {
            text: "Future Events",
            icon: <ViewListIcon />,
            clickHandler: handleViewFutureEventsClick,
          },
          {
            text: "Past Events",
            icon: <ViewListIcon />,
            clickHandler: handleViewPastEventsClick,
          },
          {
            text: "Create",
            icon: <AddBoxIcon />,
            clickHandler: handleViewCreateEventClick,
          },
        ]}
        entityComponent={contentComponent}
      />
      <slidePanel.SliderPanel
        panelContent={
          <AdminEventCreate
            handleCancel={handleCreateFormCancelClick}
            handleEventCreate={handleEventCreatedEvent}
          />
        }
      />
    </>
  );
}
