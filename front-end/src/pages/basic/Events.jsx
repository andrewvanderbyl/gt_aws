import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";
import PastUserEventsSubscribed from "./entity/events/PastUserEventsSubscribed";
import UpcomingUserEventsSubscribed from "./entity/events/UpcomingUserEventsSubscribed";
import UpcomingUserEventsUnsubscribed from "./entity/events/UpcomingUserEventsUnsubscribed";
import { useAuth } from "../../util/context/AuthUserContext";

export default function Events() {
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;

  const [contentComponent, setContentComponent] = useState(
    <UpcomingUserEventsUnsubscribed userId={userData.id} />
  );

  const handleViewUnsubscribedUpcomingUserEventsClick = (event) => {
    setContentComponent(
      <UpcomingUserEventsUnsubscribed userId={userData.id} />
    );
  };

  const handleViewSubscribedUpcomingUserEventsClick = (event) => {
    setContentComponent(<UpcomingUserEventsSubscribed userId={userData.id} />);
  };

  const handleViewSubscribedPastUserEventsClick = (event) => {
    setContentComponent(<PastUserEventsSubscribed userId={userData.id} />);
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
        {
          text: "Past",
          icon: <ViewListIcon />,
          clickHandler: handleViewSubscribedPastUserEventsClick,
        },
      ]}
      entityComponent={contentComponent}
    />
  );
}
