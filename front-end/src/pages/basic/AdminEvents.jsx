import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import { useSliderPanel } from "../../util/hooks/sliderPanelHook";
import ContentPanel from "../layout/ContentPanel";
import AdminEventCreate from "./entity/events/AdminEventCreate";
import AdminEventList from "./entity/events/AdminEventList";

export default function AdminEvents() {
  const [contentComponent, setContentComponent] = useState(
    <AdminEventList eventDataType={"future"} headerText={"Future Events"} />
  );
  const slidePanel = useSliderPanel();

  const handleViewFutureEventsClick = (event) => {
    setContentComponent(
      <AdminEventList eventDataType={"future"} headerText={"Future Events"} />
    );
  };
  const handleViewPastEventsClick = (event) => {
    setContentComponent(
      <AdminEventList eventDataType={"past"} headerText={"Past Events"} />
    );
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
    setContentComponent(
      <AdminEventList
        eventDataType={"future"}
        headerText={"Future Events"}
        forceRefresh={new Date()}
      />
    );
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
