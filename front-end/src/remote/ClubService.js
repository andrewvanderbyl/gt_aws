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
      .post(process.env.REACT_APP_CREATE_CLUB, payload, token)
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
      .put(process.env.REACT_APP_CREATE_CLUB, payload, token)
      .then((data) => {
        return data;
      });
  },
  fetchClubList: async (props, token) => {
    return await api
      .post(process.env.REACT_APP_CLUB_LIST, props, token)
      .then((data) => data);
  },
  fetchUserClub: async (props, token) => {
    return await api
      .getPaginated(process.env.REACT_APP_USER_CLUB, props, token)
      .then((data) => data);
  },
  fetchClubMembers: async (clubId, props, userId) => {
    let uri = process.env.REACT_APP_CLUB_MEMBERS.replace("{clubId}", clubId);

    return await api.getPaginated(uri, props, userId).then((data) => data);
  },
  joinClub: async (clubId, token) => {
    let uri = process.env.REACT_APP_CLUB_JOIN.replace("{clubId}", clubId);

    await api.postWithoutBody(uri, token);
  },
};
