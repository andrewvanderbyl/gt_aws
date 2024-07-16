import AsaService from "../../remote/AsaService";

export const useAsa = () => {
  const fetchAsaList = async (props, token) => {
    return await AsaService.fetchUserAsas(props, token).then(
      (events) => events
    );
  };

  const createAsa = async (props, token) => {
    return await AsaService.createAsa(props, token).then((eventData) => {
      return eventData;
    });
  };

  const fetchTimingListForAsa = async (props, asaId, token) => {
    return await AsaService.fetchTimingListForAsa(props, asaId, token).then(
      (events) => events
    );
  };

  const createTimingForAsa = async (props, asaId, token) => {
    return await AsaService.createTimingForAsa(props, asaId, token).then(
      (eventData) => {
        return eventData;
      }
    );
  };

  return { fetchAsaList, createAsa, fetchTimingListForAsa, createTimingForAsa };
};
