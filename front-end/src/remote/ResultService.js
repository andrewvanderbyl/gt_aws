import { api } from "./api";

export default {
  fetchUserRaces: async (props, token) => {
    return await api
      .getPaginated(process.env.REACT_APP_USER_RACES, props, token)
      .then((data) => {
        return data;
      });
  },
};
