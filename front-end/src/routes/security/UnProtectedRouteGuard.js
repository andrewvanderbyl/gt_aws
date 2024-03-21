import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../util/context/AuthUserContext";

export default function UnProtectedRouteGuard({ component }) {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const authUserContext = useAuth();

  useEffect(() => {
    checkUser();
  }, [component]);

  const checkUser = async () => {
    if (!authUserContext.localStorageValue) {
      // ToDo: remove user from local storage
      authUserContext.removeStorageValue();
    } else {
      navigate("/");
    }

    setStatus(true);
  };

  if (status) {
    return <React.Fragment>{component}</React.Fragment>;
  } else {
    return <React.Fragment></React.Fragment>;
  }
}
