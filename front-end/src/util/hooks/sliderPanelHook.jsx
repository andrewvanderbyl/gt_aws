import { useCallback, useRef } from "react";
import SlidePanel from "../../components/SlidePanel";

export const useSliderPanel = () => {
  const slidePanelRef = useRef();

  const closePanel = () => {
    slidePanelRef.current.closeDialog();
  };

  const openPanel = () => {
    slidePanelRef.current.openDialog();
  };

  const SliderPanel = useCallback(
    (props) => (
      <SlidePanel panelContent={props.panelContent} ref={slidePanelRef} />
    ),
    [slidePanelRef]
  );

  return { SliderPanel, closePanel, openPanel };
};
