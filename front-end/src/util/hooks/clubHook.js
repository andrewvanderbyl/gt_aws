import ClubService from "../../remote/ClubService";
import { useSessionStorage } from "./sessionStorageHook";

export const useClub = () => {
  const sessionStorage = useSessionStorage();

  const createClub = async (props) => {
    return await ClubService.createClub(
      props,
      sessionStorage.sessionStorageValue
    );
  };

  const updateClub = async (props) => {
    return await ClubService.updateClub(
      props,
      sessionStorage.sessionStorageValue
    );
  };

  const fetchClubList = async (props) => {
    return await ClubService.fetchClubList(
      props,
      sessionStorage.sessionStorageValue
    ).then((clubs) => clubs);
  };

  const fetchUserClub = async (props) => {
    return await ClubService.fetchUserClub(
      props,
      sessionStorage.sessionStorageValue
    ).then((data) => data);
  };

  const fetchClubMembers = async (clubId, props, userId) => {
    return await ClubService.fetchClubMembers(clubId, props, userId).then(
      (clubs) => clubs
    );
  };

  const joinClub = async (clubId) => {
    await ClubService.joinClub(clubId, sessionStorage.sessionStorageValue);
  };

  return {
    createClub,
    updateClub,
    fetchUserClub,
    fetchClubList,
    fetchClubMembers,
    joinClub,
  };
};
