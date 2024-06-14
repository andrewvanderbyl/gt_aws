import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import { useAuth } from "../../util/context/AuthUserContext";
import ContentPanel from "../layout/ContentPanel";
import UserEventList from "./entity/events/UserEventList";

export default function Events() {
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;

  const [contentComponent, setContentComponent] = useState(
    <UserEventList userId={userData.id} eventType={"UPCOMING"} />
  );

  const handleViewUnsubscribedUpcomingUserEventsClick = (event) => {
    setContentComponent(
      <UserEventList userId={userData.id} eventType={"UPCOMING"} />
    );
  };

  const handleViewSubscribedUpcomingUserEventsClick = (event) => {
    setContentComponent(
      <UserEventList userId={userData.id} eventType={"SUBSCRIBED"} />
    );
  };

  return (
    <ContentPanel
      entityHeaderText="Events"
      entityButtonPanel={[
        {
          text: "New",
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
