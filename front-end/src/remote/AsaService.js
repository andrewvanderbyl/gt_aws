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
};
