import { api } from "./api";

export default {
  fetchUserRaces: async (props, token) => {
    return await api
      .getPaginated(import.meta.env.VITE_USER_RACES, props, token)
      .then((data) => {
        return data;
      });
  },
};
