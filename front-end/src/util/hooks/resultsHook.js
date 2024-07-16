import ResultService from "../../remote/ResultService";

export const useResult = () => {
  const fetchRacesList = async (props, token) => {
    return await ResultService.fetchUserRaces(props, token).then(
      (events) => events
    );
  };

  return { fetchRacesList };
};
