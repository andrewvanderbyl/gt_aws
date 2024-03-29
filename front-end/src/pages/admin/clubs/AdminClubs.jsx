import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import ContentPanel from "../../layout/ContentPanel";
import ClubCreate from "./ClubCreate";
import ClubList from "./ClubList";

export default function AdminClubs() {
  const [contentComponent, setContentComponent] = useState(<ClubList />);

  const handleViewClubsClick = (event) => {
    setContentComponent(<ClubList />);
  };
  const handleViewCreateClubClick = (event) => {
    setContentComponent(<ClubCreate />);
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
      ]}
      entityComponent={contentComponent}
    />
  );
}
