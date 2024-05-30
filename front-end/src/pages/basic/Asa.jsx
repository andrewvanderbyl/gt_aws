import AddBoxIcon from "@mui/icons-material/AddBox";
import ViewListIcon from "@mui/icons-material/ViewList";
import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";
import AsaCreate from "./entity/asa/AsaCreate";
import AsaList from "./entity/asa/AsaList";
import { useSliderPanel } from "../../util/hooks/sliderPanelHook";

export default function Asa() {
  const [contentComponent, setContentComponent] = useState(<AsaList />);
  const slidePanel = useSliderPanel();

  // const handleViewAsasClick = (event) => {
  //   setContentComponent(<AsaList />);
  // };

  const handleViewCreateAsaClick = (event) => {
    event.preventDefault();
    slidePanel.openPanel();
  };

  const handleCreateFormCancelClick = (event) => {
    event.preventDefault();
    slidePanel.closePanel();
  };

  const handleAsaCreatedEvent = () => {
    slidePanel.closePanel();
    setContentComponent(<AsaList forceRefresh={new Date()} />);
  };

  return (
    <>
      <ContentPanel
        entityHeaderText="ASA"
        entityButtonPanel={[
          // {
          //   text: "List",
          //   icon: <ViewListIcon />,
          //   clickHandler: handleViewAsasClick,
          // },
          {
            text: "Create",
            icon: <AddBoxIcon />,
            clickHandler: handleViewCreateAsaClick,
          },
        ]}
        entityComponent={contentComponent}
      />
      <slidePanel.SliderPanel
        panelContent={
          <AsaCreate
            handleCancel={handleCreateFormCancelClick}
            handleAsaCreated={handleAsaCreatedEvent}
          />
        }
      />
    </>
  );
}
