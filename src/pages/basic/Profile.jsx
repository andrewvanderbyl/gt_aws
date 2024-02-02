import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PeopleIcon from "@mui/icons-material/People";
import ViewListIcon from "@mui/icons-material/ViewList";
import ApartmentIcon from "@mui/icons-material/Apartment";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";
import UserASAList from "./entity/user/UserASAList";
import UserProfile from "./entity/user/UserProfile";
import UserRaceList from "./entity/user/UserRaceList";
import UserClubsList from "./entity/user/UserClubsList";

export default function Profile() {
  const [contentComponent, setContentComponent] = useState(<UserProfile />);

  const handleViewProfileClick = (event) => {
    setContentComponent(<UserProfile />);
  };
  const handleViewRacesClick = (event) => {
    setContentComponent(<UserRaceList />);
  };
  const handleViewASAClick = (event) => {
    setContentComponent(<UserASAList />);
  };
  const handleViewUserClubsClick = (event) => {
    setContentComponent(<UserClubsList />);
  };

  return (
    <ContentPanel
      // "User" text to be changed to peron's name
      entityHeaderText="Mike Lowry"
      entityButtonPanel={[
        {
          text: "Profile",
          icon: <PeopleIcon />,
          clickHandler: handleViewProfileClick,
        },
        {
          text: "Races",
          icon: <DirectionsRunIcon />,
          clickHandler: handleViewRacesClick,
        },
        {
          text: "ASA",
          icon: <ViewListIcon />,
          clickHandler: handleViewASAClick,
        },
        {
          text: "Clubs",
          icon: <ApartmentIcon />,
          clickHandler: handleViewUserClubsClick,
        },
      ]}
      entityComponent={contentComponent}
    />
  );
}
