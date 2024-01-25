import AddBoxIcon from '@mui/icons-material/AddBox';
import ViewListIcon from '@mui/icons-material/ViewList';
import ClubList from '../clubs/ClubList';
import ContentPanel from '../layout/ContentPanel';

export default function Clubs() {
    return (
        <ContentPanel
          entityHeaderText="Clubs"
          entityButtonPanel={[
              {text: "List", icon:<ViewListIcon/>},
              {text:"Create", icon:<AddBoxIcon/>}
            ]}
          entityComponent={<ClubList/>}
        />
    );
}