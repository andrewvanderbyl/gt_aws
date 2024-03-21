import { api } from "../api";

export const SignIn = async (props) => {
  // const [userData, setUserData] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  let uri = process.env.REACT_APP_SIGN_IN;
  // setIsLoading(true);

  const payload = {
    username: props.username,
    password: props.password,
  };

  return await api.post(uri, payload).then((data) => {
    return data;
  });
};
