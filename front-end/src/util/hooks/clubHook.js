import ClubService from "../../remote/ClubService";

export const useClub = () => {
  const createClub = async (props) => {
    return await ClubService.createClub(props).then((clubData) => {
      return clubData;
    });
  };

  const fetchClubList = async (props) => {
    return await ClubService.fetchClubList(props).then((clubs) => clubs);
  };

  const fetchUserClub = async (userId, props) => {
    return await ClubService.fetchUserClub(userId, props).then((data) => data);
  };

  const fetchClubMembers = async (clubId, props, userId) => {
    return await ClubService.fetchClubMembers(clubId, props, userId).then(
      (clubs) => clubs
    );
  };

  const joinClub = async (clubId, userId) => {
    await ClubService.joinClub(clubId, userId);
  };

  return {
    createClub,
    fetchUserClub,
    fetchClubList,
    fetchClubMembers,
    joinClub,
  };
};
