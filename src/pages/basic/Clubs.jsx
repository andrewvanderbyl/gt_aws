import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import ContentPanel from "../layout/ContentPanel";
import ClubList from "./entity/clubs/ClubList";
import ClubCreate from "./entity/clubs/ClubCreate";
import { useState } from "react";

export default function Clubs() {
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
