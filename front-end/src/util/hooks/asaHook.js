import AsaService from "../../remote/AsaService";
import { useSessionStorage } from "./sessionStorageHook";

export const useAsa = () => {
  const sessionStorage = useSessionStorage();

  const fetchAsaList = async (props) => {
    return await AsaService.fetchUserAsas(
      props,
      sessionStorage.sessionStorageValue
    ).then((events) => events);
  };

  const createAsa = async (props) => {
    return await AsaService.createAsa(
      props,
      sessionStorage.sessionStorageValue
    ).then((eventData) => {
      return eventData;
    });
  };

  const fetchTimingListForAsa = async (props, asaId) => {
    return await AsaService.fetchTimingListForAsa(
      props,
      asaId,
      sessionStorage.sessionStorageValue
    ).then((events) => events);
  };

  const createTimingForAsa = async (props, asaId) => {
    return await AsaService.createTimingForAsa(
      props,
      asaId,
      sessionStorage.sessionStorageValue
    ).then((eventData) => {
      return eventData;
    });
  };

  return { fetchAsaList, createAsa, fetchTimingListForAsa, createTimingForAsa };
};
