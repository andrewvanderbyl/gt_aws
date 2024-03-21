import PeopleIcon from "@mui/icons-material/People";
import SellIcon from "@mui/icons-material/Sell";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";

import { useAuth } from "../../util/context/AuthUserContext";
import UserProfile from "./entity/user/UserProfile";
import UserRegistrationList from "./entity/user/UserRegistrationList";

export default function Profile() {
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;
  const name = `${userData.firstName} ${userData.lastName}`;

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
