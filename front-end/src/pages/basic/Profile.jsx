import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";

import UserProfile from "./entity/user/UserProfile";
import Home from "./entity/Home";
import { useAuth } from "../../util/context/AuthUserContext";

export default function Profile() {
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;
  const name = `${userData.firstName} ${userData.lastName}`;

  const [contentComponent, setContentComponent] = useState(<Home />);

  const handleViewProfileClick = (event) => {
    setContentComponent(<UserProfile />);
  };

  return (
    <ContentPanel
      entityHeaderText={name}
      entityButtonPanel={[
        {
          text: "Profile",
          icon: <PeopleIcon />,
          clickHandler: handleViewProfileClick,
        },
      ]}
      entityComponent={contentComponent}
    />
  );
}
