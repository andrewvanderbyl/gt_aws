import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PeopleIcon from "@mui/icons-material/People";
import ViewListIcon from "@mui/icons-material/ViewList";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";
import SellIcon from "@mui/icons-material/Sell";

import UserASAList from "./entity/user/UserASAList";
import UserProfile from "./entity/user/UserProfile";
import UserRaceList from "./entity/user/UserRaceList";
import UserClubsList from "./entity/user/UserClubsList";
import UserRegistrationList from "./entity/user/UserRegistrationList";

export default function Profile() {
  const [contentComponent, setContentComponent] = useState(<UserProfile />);

  const handleViewProfileClick = (event) => {
    setContentComponent(<UserProfile />);
  };
  const handleViewRacesClick = (event) => {
    setContentComponent(<UserRaceList />);
  };
  const handleViewASAClick = (event) => {
    setContentComponent(<UserRegistrationList />);
  };
  const handleViewUserClubsClick = (event) => {
    setContentComponent(<UserClubsList />);
  };

  return (
    <ContentPanel
      // "User" text to be changed to peron's name
      entityHeaderText="Jedi Vikram"
      entityButtonPanel={[
        {
          text: "Personal Details",
          icon: <PeopleIcon />,
          clickHandler: handleViewProfileClick,
        },
        // {
        //   text: "Races",
        //   icon: <DirectionsRunIcon />,
        //   clickHandler: handleViewRacesClick,
        // },
        {
          text: "ASA/Tag Registrations",
          icon: <SellIcon />,
          clickHandler: handleViewASAClick,
        },
        // {
        //   text: "Club",
        //   icon: <ApartmentIcon />,
        //   clickHandler: handleViewUserClubsClick,
        // },
      ]}
      entityComponent={contentComponent}
    />
  );
}
