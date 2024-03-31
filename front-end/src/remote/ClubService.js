import { api } from "./api";

export default {
  createClub: async (props) => {
    const payload = {
      name: props.name,
      email: props.email,
      contact: props.contact,
      province: props.province,
      country: props.country,
    };

    return await api
      .post(process.env.REACT_APP_CREATE_CLUB, payload)
      .then((data) => {
        return data;
      });
  },
  fetchClubList: async (props) => {
    return await api
      .post(process.env.REACT_APP_CLUB_LIST, props)
      .then((data) => data);
  },
  fetchUserClub: async (userId, props) => {
    return await api
      .getPaginated(process.env.REACT_APP_USER_CLUB, props, userId)
      .then((data) => data);
  },
  fetchClubMembers: async (clubId, props, userId) => {
    let uri = process.env.REACT_APP_CLUB_MEMBERS.replace("{clubId}", clubId);

    return await api.getPaginated(uri, props, userId).then((data) => data);
  },
};
