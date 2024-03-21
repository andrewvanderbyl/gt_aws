import { api } from "./api";

export const CreateClub = async (props) => {
  let uri = process.env.REACT_APP_CREATE_CLUB;

  const payload = {
    name: props.name,
    email: props.email,
    contact: props.contact,
    province: props.province,
    country: props.country,
  };

  return await api.post(uri, payload).then((data) => {
    return data;
  });
};
