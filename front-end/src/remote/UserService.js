import { api } from "./api";

export default {
  registerUser: async (createUserPayload) => {
    return await api
      .post(process.env.REACT_APP_CREATE_USER, createUserPayload)
      .then((data) => data);
  },
  updateUser: async (updateUserPayload, userId) => {
    return await api
      .put(process.env.REACT_APP_CREATE_USER, updateUserPayload, userId)
      .then((data) => data);
  },
};
