import { useState } from "react";
import ContentPanel from "../layout/ContentPanel";
import UserRaceList from "./entity/races/UserRaceList";

export default function Results() {
  return (
    <>
      <ContentPanel
        entityHeaderText="Results"
        entityButtonPanel={[]}
        entityComponent={<UserRaceList />}
      />
    </>
  );
}
