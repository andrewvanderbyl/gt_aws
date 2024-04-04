import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useRef, useState } from "react";
import SlideEntityPanel from "../../components/SlideEntityPanel";
import ContentPanel from "../layout/ContentPanel";
import FutureEventList from "./entity/events/FutureEventList";
import PastEventList from "./entity/events/PastEventList";
import AdminEventCreate from "./entity/events/AdminEventCreate";

export default function AdminEvents() {
  const [contentComponent, setContentComponent] = useState(<FutureEventList />);
  const slidePanelRef = useRef();

  const handleViewFutureEventsClick = (event) => {
    setContentComponent(<FutureEventList />);
  };
  const handleViewPastEventsClick = (event) => {
    setContentComponent(<PastEventList />);
  };
  const handleViewCreateEventClick = (event) => {
    event.preventDefault();
    slidePanelRef.current.openDialog();
  };

  const handleCreateFormCancelClick = (event) => {
    event.preventDefault();
    slidePanelRef.current.closeDialog();
  };

  const handleEventCreatedEvent = () => {
    slidePanelRef.current.closeDialog();
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
      <SlideEntityPanel
        panelContent={
          <AdminEventCreate
            handleCancel={handleCreateFormCancelClick}
            handleEventCreate={handleEventCreatedEvent}
          />
        }
        ref={slidePanelRef}
      />
    </>
  );
}
