import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";
import SellIcon from "@mui/icons-material/Sell";

import UserProfile from "./entity/user/UserProfile";
import UserRegistrationList from "./entity/user/UserRegistrationList";
import { useLocation } from "react-router";

export default function Profile() {
  const location = useLocation();
  const data = location.state;
  const name = `${data.firstName} ${data.lastName}`;

  const [contentComponent, setContentComponent] = useState(<UserProfile />);

  const handleViewProfileClick = (event) => {
    setContentComponent(<UserProfile />);
  };
  const handleViewASAClick = (event) => {
    setContentComponent(<UserRegistrationList />);
  };

  return (
    <ContentPanel
      entityHeaderText={name}
      entityButtonPanel={[
        {
          text: "Personal Details",
          icon: <PeopleIcon />,
          clickHandler: handleViewProfileClick,
        },
        {
          text: "ASA/Tag Registrations",
          icon: <SellIcon />,
          clickHandler: handleViewASAClick,
        },
      ]}
      entityComponent={contentComponent}
    />
  );
}
