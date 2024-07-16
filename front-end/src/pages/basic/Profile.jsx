import PeopleIcon from "@mui/icons-material/People";
import ContentPanel from "../layout/ContentPanel";
import BusinessIcon from "@mui/icons-material/Business";

import { useAuth } from "../../util/context/AuthUserContext";
import { useSliderPanel } from "../../util/hooks/sliderPanelHook";
import Home from "./entity/Home";
import UserClubsList from "./entity/user/UserClubsList";
import UserProfile from "./entity/user/UserProfile";
import { useState } from "react";

export default function Profile() {
  const authUserContext = useAuth();
  const userData = {};
  //const userData = authUserContext.localStorageValue;
  const name = `${userData.firstName} ${userData.lastName}`;

  const slidePanel = useSliderPanel();
  const slideClubPanel = useSliderPanel();
  const [showClub, setShowClub] = useState(false);

  const handleViewProfileClick = (event) => {
    event.preventDefault();
    slidePanel.openPanel();
  };

  const handleViewClubsClick = (event) => {
    event.preventDefault();
    setShowClub(true);
    slideClubPanel.openPanel();
  };

  const handleCreateFormCancelClick = (event) => {
    event.preventDefault();
    slidePanel.closePanel();
  };

  const handleJoinFormCancelClick = (event) => {
    setShowClub(false);
    slideClubPanel.closePanel();
  };

  const handleProfileViewedEvent = () => {
    slidePanel.closePanel();
  };

  return (
    <>
      <ContentPanel
        entityHeaderText={name}
        entityButtonPanel={[
          {
            text: "Profile",
            icon: <PeopleIcon />,
            clickHandler: handleViewProfileClick,
          },
          {
            text: "Club",
            icon: <BusinessIcon />,
            clickHandler: handleViewClubsClick,
          },
        ]}
        entityComponent={<Home />}
      />
      <slidePanel.SliderPanel
        panelContent={
          <UserProfile
            handleCancel={handleCreateFormCancelClick}
            handleProfileViewed={handleProfileViewedEvent}
          />
        }
      />
      <slideClubPanel.SliderPanel
        panelContent={
          <UserClubsList
            handleCancel={handleJoinFormCancelClick}
            showClub={showClub}
          />
        }
      />
    </>
  );
}
