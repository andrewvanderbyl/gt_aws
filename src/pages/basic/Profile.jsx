import { Container, Grid, Paper } from "@mui/material";
import ContentPanel from "../layout/ContentPanel";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ViewListIcon from '@mui/icons-material/ViewList';
import PeopleIcon from '@mui/icons-material/People';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import UserRaceList from "./entity/user/UserRaceList";
import { useState } from "react";
import UserASAList from "./entity/user/UserASAList";
import UserProfile from "./entity/user/UserProfile";

export default function Profile() {

    const [contentComponent, setContentComponent] = useState(<UserRaceList/>)

    const handleViewProfileClick = event => { setContentComponent(<UserProfile/>)}
    const handleViewRacesClick = event => { setContentComponent(<UserRaceList/>)}
    const handleViewASAClick = event => { setContentComponent(<UserASAList/>)}

    return (
      <ContentPanel
      // "User" text to be changed to peron's name
        entityHeaderText="Mike Lowry"
        entityButtonPanel={[
            {text: "Profile", icon:<PeopleIcon/>, clickHandler: handleViewProfileClick},
            {text: "Races", icon:<DirectionsRunIcon/>, clickHandler: handleViewRacesClick},
            {text: 'ASA', icon:<ViewListIcon/>, clickHandler: handleViewASAClick}
          ]}
        entityComponent={contentComponent}
      />
    );
}