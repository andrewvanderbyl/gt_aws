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

  return { createClub, fetchClubList };
};
