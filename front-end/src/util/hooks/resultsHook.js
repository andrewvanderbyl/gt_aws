import ResultService from "../../remote/ResultService";

export const useResult = () => {
  const fetchRacesList = async (props, userId) => {
    return await ResultService.fetchUserRaces(props, userId).then(
      (events) => events
    );
  };

  return { fetchRacesList };
};
