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
      .then((data) => {
        return data;
      });
  },
};
