import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";
import UserEventList from "./entity/events/UserEventList";

export default function Events() {
  const [contentComponent, setContentComponent] = useState(
    <UserEventList eventType={"UPCOMING"} />
  );

  const handleViewUnsubscribedUpcomingUserEventsClick = (event) => {
    setContentComponent(<UserEventList eventType={"UPCOMING"} />);
  };

  const handleViewSubscribedUpcomingUserEventsClick = (event) => {
    setContentComponent(<UserEventList eventType={"SUBSCRIBED"} />);
  };

  return (
    <ContentPanel
      entityHeaderText="Events"
      entityButtonPanel={[
        {
          text: "Upcoming",
          icon: <ViewListIcon />,
          clickHandler: handleViewUnsubscribedUpcomingUserEventsClick,
        },
        {
          text: "Subscribed",
          icon: <ViewListIcon />,
          clickHandler: handleViewSubscribedUpcomingUserEventsClick,
        },
      ]}
      entityComponent={contentComponent}
    />
  );
}
