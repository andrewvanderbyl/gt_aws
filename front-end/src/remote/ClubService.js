import { api } from "./api";

export default {
  createClub: async (props, token) => {
    const payload = {
      name: props.name,
      email: props.email,
      contact: props.contact,
      province: props.province,
      country: props.country,
    };

    return await api
      .post(import.meta.env.VITE_CREATE_CLUB, payload, token)
      .then((data) => {
        return data;
      });
  },
  updateClub: async (props, token) => {
    const payload = {
      id: props.id,
      name: props.name,
      email: props.email,
      contact: props.contact,
      province: props.province,
      country: props.country,
    };

    return await api
      .put(import.meta.env.VITE_CREATE_CLUB, payload, token)
      .then((data) => {
        return data;
      });
  },
  fetchClubList: async (props, token) => {
    return await api
      .post(import.meta.env.VITE_CLUB_LIST, props, token)
      .then((data) => data);
  },
  fetchUserClub: async (props, token) => {
    return await api
      .getPaginated(import.meta.env.VITE_USER_CLUB, props, token)
      .then((data) => data);
  },
  fetchClubMembers: async (clubId, props, userId) => {
    let uri = import.meta.env.VITE_CLUB_MEMBERS.replace("{clubId}", clubId);

    return await api.getPaginated(uri, props, userId).then((data) => data);
  },
  joinClub: async (clubId, token) => {
    let uri = import.meta.env.VITE_CLUB_JOIN.replace("{clubId}", clubId);

    await api.postWithoutBody(uri, token);
  },
};
