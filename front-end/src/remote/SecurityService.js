import { api } from "./api";

export default {
  signIn: async (props) => {
    let uri = process.env.REACT_APP_SIGN_IN;

    const payload = {
      username: props.username,
      password: props.password,
    };

    return await api.post(uri, payload).then((data) => {
      return data;
    });
  },
};
