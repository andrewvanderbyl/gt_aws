import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";
import ClubCreate from "./entity/clubs/ClubCreate";
import ClubMemberList from "./entity/clubs/ClubMemberList";

export default function Club() {
  const [contentComponent, setContentComponent] = useState(<ClubCreate />);

  const handleViewClubMembersClick = (event) => {
    setContentComponent(<ClubMemberList />);
  };

  const handleViewClubProfileClick = (event) => {
    setContentComponent(<ClubCreate />);
  };

  return (
    <ContentPanel
      entityHeaderText="Club"
      entityButtonPanel={[
        {
          text: "Profile",
          icon: <BusinessIcon />,
          clickHandler: handleViewClubProfileClick,
        },
        {
          text: "Members",
          icon: <PeopleIcon />,
          clickHandler: handleViewClubMembersClick,
        },
      ]}
      entityComponent={contentComponent}
    />
  );
}
