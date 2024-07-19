import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import ContentPanel from "../layout/ContentPanel";

import { useEffect, useState } from "react";
import { useLoader } from "../../util/hooks/loaderHook";
import { useSliderPanel } from "../../util/hooks/sliderPanelHook";
import { useUser } from "../../util/hooks/userHook";
import Home from "./entity/Home";
import UserClubsList from "./entity/user/UserClubsList";
import UserProfile from "./entity/user/UserProfile";

export default function Profile() {
  const slidePanel = useSliderPanel();
  const slideClubPanel = useSliderPanel();
  const [showClub, setShowClub] = useState(false);
  const [refresh, setRefresh] = useState();
  const [user, setUser] = useState({ firstName: "", lastName: "" });
  const loader = useLoader();
  const userHook = useUser();

  useEffect(() => {
    (async () => {
      loader.showLoader();
      const getUserResponse = await userHook.getUser();

      loader.closeLoader();
      setUser(getUserResponse);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

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
    setRefresh(new Date());
  };

  return (
    <>
      <loader.LoadingPanel />
      <ContentPanel
        entityHeaderText={`${user.firstName} ${user.lastName}`}
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
            user={user}
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
