import ResultService from "../../remote/ResultService";
import { useSessionStorage } from "./sessionStorageHook";

export const useResult = () => {
  const sessionStorage = useSessionStorage();

  const fetchRacesList = async (props) => {
    return await ResultService.fetchUserRaces(
      props,
      sessionStorage.sessionStorageValue
    ).then((events) => events);
  };

  return { fetchRacesList };
};
