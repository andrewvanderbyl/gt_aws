import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import PeopleIcon from "@mui/icons-material/People";
import { useState } from "react";
import ClubList from "./ClubList";
import ClubCreate from "./ClubCreate";
import ClubMemberList from "../../basic/entity/clubs/ClubMemberList";
import ContentPanel from "../../layout/ContentPanel";

export default function AdminClubs() {
  const [contentComponent, setContentComponent] = useState(<ClubList />);

  const handleViewClubsClick = (event) => {
    setContentComponent(<ClubList />);
  };
  const handleViewCreateClubClick = (event) => {
    setContentComponent(<ClubCreate />);
  };
  const handleViewClubMembersClick = (event) => {
    setContentComponent(<ClubMemberList />);
  };

  return (
    <ContentPanel
      entityHeaderText="Clubs"
      entityButtonPanel={[
        {
          text: "List",
          icon: <ViewListIcon />,
          clickHandler: handleViewClubsClick,
        },
        {
          text: "Create",
          icon: <AddBoxIcon />,
          clickHandler: handleViewCreateClubClick,
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
