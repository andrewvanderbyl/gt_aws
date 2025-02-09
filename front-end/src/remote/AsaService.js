import { api } from "./api";

export default {
  fetchUserAsas: async (props, token) => {
    return await api
      .getPaginated(import.meta.env.VITE_USER_ASAS, props, token)
      .then((data) => {
        return data;
      });
  },

  createAsa: async (props, token) => {
    const payload = {
      asa: props.asa,
    };

    return await api
      .post(import.meta.env.VITE_ASA_CREATE_FOR_USER, payload, token)
      .then((data) => {
        return data;
      });
  },

  fetchTimingListForAsa: async (props, asaId, token) => {
    let uri = import.meta.env.VITE_ASA_TIMING_CHIPS.replace("{asaId}", asaId);

    return await api.getPaginated(uri, props, token).then((data) => {
      return data;
    });
  },

  createTimingForAsa: async (props, asaId, token) => {
    let uri = import.meta.env.VITE_ASA_CREATE_TIMING_CHIP.replace(
      "{asaId}",
      asaId
    );

    const payload = {
      tag: props.tag,
    };

    return await api.post(uri, payload, token).then((data) => {
      return data;
    });
  },
};
