import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";
import AsaList from "./entity/asa/AsaList";
import ClubCreate from "./entity/clubs/ClubCreate";

export default function Asa() {
  const [contentComponent, setContentComponent] = useState(<AsaList />);

  const handleViewAsasClick = (event) => {
    setContentComponent(<AsaList />);
  };

  const handleViewCreateAsaClick = (event) => {
    setContentComponent(<ClubCreate />);
  };

  return (
    <ContentPanel
      entityHeaderText="ASA"
      entityButtonPanel={[
        {
          text: "List",
          icon: <ViewListIcon />,
          clickHandler: handleViewAsasClick,
        },
        {
          text: "Create",
          icon: <AddBoxIcon />,
          clickHandler: handleViewCreateAsaClick,
        },
      ]}
      entityComponent={contentComponent}
    />
  );
}
