import ApartmentIcon from '@mui/icons-material/Apartment';
import BadgeIcon from '@mui/icons-material/Badge';
import DashboardIcon from '@mui/icons-material/Dashboard';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PeopleIcon from '@mui/icons-material/People';
import { Divider } from '@mui/material';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import MenuItem from '../../components/MenuItem';

export default function ListItems() {
  return (
    <React.Fragment>
      <MenuItem menuText={"Dashboard"} menuIcon={<DashboardIcon/>} menuClickNav={'dashboard'}/>
      <MenuItem menuText={"Profile"} menuIcon={<PeopleIcon/>} menuClickNav={'profile'}/>
      <MenuItem menuText={"Clubs"} menuIcon={<DirectionsRunIcon/>} menuClickNav={'clubs'}/>

      <Divider sx={{ my: 1 }} />
  
      <ListSubheader component="div" inset>Administration</ListSubheader>
      <MenuItem menuText={"Privileges"} menuIcon={<BadgeIcon/>} menuClickNav={'privileges'}/>
      <MenuItem menuText={"Clubs"} menuIcon={<ApartmentIcon/>} menuClickNav={'clubs'}/>
    </React.Fragment>
  );
}