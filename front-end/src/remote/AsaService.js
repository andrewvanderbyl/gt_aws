import { api } from "./api";

export default {
  fetchUserAsas: async (props, userId) => {
    return await api
      .getPaginated(process.env.REACT_APP_USER_ASAS, props, userId)
      .then((data) => {
        return data;
      });
  },

  createAsa: async (props, userId) => {
    const payload = {
      asa: props.asa,
    };

    return await api
      .post(process.env.REACT_APP_ASA_CREATE_FOR_USER, payload, userId)
      .then((data) => {
        return data;
      });
  },

  fetchTimingListForAsa: async (props, asaId, userId) => {
    let uri = process.env.REACT_APP_ASA_TIMING_CHIPS.replace("{asaId}", asaId);

    return await api.getPaginated(uri, props, userId).then((data) => {
      return data;
    });
  },

  createTimingForAsa: async (props, asaId, userId) => {
    let uri = process.env.REACT_APP_ASA_CREATE_TIMING_CHIP.replace(
      "{asaId}",
      asaId
    );

    const payload = {
      tag: props.tag,
    };

    return await api.post(uri, payload, userId).then((data) => {
      return data;
    });
  },
};
