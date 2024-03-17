import { api } from "../api";
import { useEffect, useState } from "react";

export const useGetUserById = (userId) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    contact: "",
  });
  const [refresh, setRefresh] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let uri = process.env.REACT_APP_GET_USER_BY_ID.replace("{userId}", userId);
    setIsLoading(true);
    api.get(uri).then((data) => {
      setUserData(data);
      setIsLoading(false);
    });
  }, [refresh]);

  const refreshItems = () => {
    setRefresh(!refresh);
  };

  return { userData, refreshItems, isLoading };
};
