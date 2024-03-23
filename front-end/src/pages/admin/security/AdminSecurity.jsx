import { useState } from "react";
import ContentPanel from "../../layout/ContentPanel";
import SecurityList from "./SecurityList";

export default function AdminSecurity() {
  const [contentComponent, setContentComponent] = useState(<SecurityList />);

  return (
    <ContentPanel
      entityHeaderText="Security"
      entityButtonPanel={[]}
      entityComponent={contentComponent}
    />
  );
}
