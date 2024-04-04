import BusinessIcon from "@mui/icons-material/Business";
import PeopleIcon from "@mui/icons-material/People";
import { useEffect, useState } from "react";
import { useAuth } from "../../util/context/AuthUserContext";
import { useClub } from "../../util/hooks/clubHook";
import ContentPanel from "../layout/ContentPanel";
import ClubMemberList from "./clubs/ClubMemberList";
import ClubCreate from "./entity/clubs/ClubCreate";

export default function Club() {
  const authUserContext = useAuth();
  const userData = authUserContext.localStorageValue;

  const [club, setClub] = useState({});

  const clubHook = useClub();

  useEffect(() => {
    (async () => {
      const userClub = await clubHook.fetchUserClub(userData.id, {
        page: 0,
        size: 1,
      });

      if (userClub.data.length > 0) {
        setClub(userClub.data[0]);
      }
    })();
  }, []);

  const [contentComponent, setContentComponent] = useState(<ClubCreate />);

  const handleViewClubMembersClick = (event) => {
    setContentComponent(
      <ClubMemberList userId={userData.id} clubId={club.id} />
    );
  };

  const handleViewClubProfileClick = (event) => {
    setContentComponent(<ClubCreate />);
  };

  return (
    <ContentPanel
      entityHeaderText="Club"
      entityButtonPanel={[
        {
          text: "Profile",
          icon: <BusinessIcon />,
          clickHandler: handleViewClubProfileClick,
        },
        {
          text: "Members",
          icon: <PeopleIcon />,
          clickHandler: handleViewClubMembersClick,
        },
      ]}
      entityComponent={contentComponent}
    />
  );
}
