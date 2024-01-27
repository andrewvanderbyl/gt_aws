import { Container, Grid, Paper } from "@mui/material";
import ContentPanel from "../layout/ContentPanel";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ViewListIcon from '@mui/icons-material/ViewList';
import PeopleIcon from '@mui/icons-material/People';
import UserList from "./entity/user/UserList";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

export default function Profile() {
    return (
      <ContentPanel
      // "User" text to be changed to peron's name
        entityHeaderText="User"
        entityButtonPanel={[
            {text: "Profile", icon:<PeopleIcon/>},
            {text:"Races", icon:<DirectionsRunIcon/>}
          ]}
        entityComponent={<UserList/>}
      />
    );
}