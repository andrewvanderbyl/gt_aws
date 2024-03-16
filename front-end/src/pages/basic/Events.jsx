import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";
import ClubCreate from "./entity/clubs/ClubCreate";
import ClubMemberList from "./entity/clubs/ClubMemberList";

export default function Events() {
  const [contentComponent, setContentComponent] = useState(<ClubCreate />);

  const handleViewEventsClick = (event) => {
    setContentComponent(<ClubMemberList />);
  };

  const handleViewCreateEventClick = (event) => {
    setContentComponent(<ClubCreate />);
  };

  return (
    <ContentPanel
      entityHeaderText="Future Events"
      entityButtonPanel={[
        {
          text: "List",
          icon: <ViewListIcon />,
          clickHandler: handleViewEventsClick,
        },
        {
          text: "Create",
          icon: <AddBoxIcon />,
          clickHandler: handleViewCreateEventClick,
        },
      ]}
      entityComponent={contentComponent}
    />
  );
}
