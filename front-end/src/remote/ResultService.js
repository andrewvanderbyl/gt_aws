import { api } from "./api";

export default {
  fetchUserRaces: async (props, userId) => {
    return await api
      .getPaginated(process.env.REACT_APP_USER_RACES, props, userId)
      .then((data) => {
        return data;
      });
  },
};
