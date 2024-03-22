import { api } from "./api";

export default {
  registerUser: async (createUserPayload) => {
    return await api
      .post(process.env.REACT_APP_CREATE_USER, createUserPayload)
      .then((data) => {
        return data;
      });
  },
};
