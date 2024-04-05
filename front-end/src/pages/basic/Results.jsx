import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import ClubCreate from "../basic/entity/clubs/ClubCreate";
import ContentPanel from "../layout/ContentPanel";
import UserRaceList from "./entity/user/UserRaceList";

export default function Results() {
  const [contentComponent, setContentComponent] = useState(<UserRaceList />);

  const handleViewResultsClick = (event) => {
    setContentComponent(<UserRaceList />);
  };

  return (
    <>
      <ContentPanel
        entityHeaderText="Results"
        entityButtonPanel={[
          {
            text: "List",
            icon: <ViewListIcon />,
            clickHandler: handleViewResultsClick,
          },
        ]}
        entityComponent={contentComponent}
      />
    </>
  );
}
