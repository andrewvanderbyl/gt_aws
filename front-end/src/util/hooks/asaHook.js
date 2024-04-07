import AsaService from "../../remote/AsaService";

export const useAsa = () => {
  const fetchAsaList = async (props, userId) => {
    return await AsaService.fetchUserAsas(props, userId).then(
      (events) => events
    );
  };

  const createAsa = async (props, userId) => {
    return await AsaService.createAsa(props, userId).then((eventData) => {
      return eventData;
    });
  };

  return { fetchAsaList, createAsa };
};
