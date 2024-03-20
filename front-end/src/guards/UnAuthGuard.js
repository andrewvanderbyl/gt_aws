import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthUserContext";

const UnAuthGuard = ({ component }) => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const authUserContext = useAuth();
  console.log("User", authUserContext.localStorageValue);

  useEffect(() => {
    console.log("UnAuth Guard");
    checkUser();
  }, [component]);

  const checkUser = async () => {
    if (!authUserContext.localStorageValue) {
      // ToDo: remove user from local storage
      authUserContext.removeStorageValue();
    }

    setStatus(true);
  };

  if (status) {
    return <React.Fragment>{component}</React.Fragment>;
  } else {
    return <React.Fragment></React.Fragment>;
  }
};

export default UnAuthGuard;
