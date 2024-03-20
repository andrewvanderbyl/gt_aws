import React, { useEffect, useState } from "react";
import { useAuth } from "../context/AuthUserContext";
import { useNavigate } from "react-router";

const AuthGuard = ({ component }) => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const authUserContext = useAuth();
  console.log("User", authUserContext.localStorageValue);

  useEffect(() => {
    console.log("Auth Guard");
    checkUser();
  }, [component]);

  const checkUser = async () => {
    if (!authUserContext.localStorageValue) {
      console.log("Invalid user, returning to login");
      navigate("/login");
    }
    setStatus(true);
    return;
  };

  if (status) {
    return <React.Fragment>{component}</React.Fragment>;
  } else {
    return <React.Fragment></React.Fragment>;
  }
};

export default AuthGuard;
