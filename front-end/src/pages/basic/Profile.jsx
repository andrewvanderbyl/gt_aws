import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";

import { useAuth } from "../../util/context/AuthUserContext";
import UserProfile from "./entity/user/UserProfile";

export default function Profile() {
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;
  const name = `${userData.firstName} ${userData.lastName}`;

  const [contentComponent, setContentComponent] = useState(<UserProfile />);

  const handleViewProfileClick = (event) => {
    setContentComponent(<UserProfile />);
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
      ]}
      entityComponent={contentComponent}
    />
  );
}
