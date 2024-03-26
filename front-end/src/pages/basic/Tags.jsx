import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";
import TagList from "./entity/tags/TagList";

export default function Tags() {
  const [contentComponent, setContentComponent] = useState(<TagList />);

  const handleViewTagsClick = (event) => {
    setContentComponent(<TagList />);
  };

  return (
    <ContentPanel
      entityHeaderText="Timing Chip"
      entityButtonPanel={[
        {
          text: "List",
          icon: <ViewListIcon />,
          clickHandler: handleViewTagsClick,
        },
      ]}
      entityComponent={contentComponent}
    />
  );
}
