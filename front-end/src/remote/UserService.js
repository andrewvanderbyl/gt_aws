import { api } from "./api";

export default {
  registerUser: async (createUserPayload) => {
    return await api
      .post(import.meta.env.VITE_CREATE_USER, createUserPayload)
      .then((data) => data);
  },
  updateUser: async (updateUserPayload, userId) => {
    return await api
      .put(import.meta.env.VITE_CREATE_USER, updateUserPayload, userId)
      .then((data) => data);
  },
  getUser: async (token) => {
    return await api
      .get(import.meta.env.VITE_GET_USER, token)
      .then((data) => data);
  },
};
