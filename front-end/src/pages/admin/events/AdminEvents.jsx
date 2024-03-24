import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import ContentPanel from "../../layout/ContentPanel";
import EventCreate from "./EventCreate";
import FutureEventList from "./FutureEventList";
import PastEventList from "./PastEventList";

export default function AdminEvents() {
  const [contentComponent, setContentComponent] = useState(<EventCreate />);

  const handleViewFutureEventsClick = (event) => {
    setContentComponent(<FutureEventList />);
  };
  const handleViewPastEventsClick = (event) => {
    setContentComponent(<PastEventList />);
  };
  const handleViewCreateEventClick = (event) => {
    setContentComponent(<EventCreate />);
  };

  return (
    <ContentPanel
      entityHeaderText="Events"
      entityButtonPanel={[
        {
          text: "Create",
          icon: <AddBoxIcon />,
          clickHandler: handleViewCreateEventClick,
        },
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
      ]}
      entityComponent={contentComponent}
    />
  );
}
