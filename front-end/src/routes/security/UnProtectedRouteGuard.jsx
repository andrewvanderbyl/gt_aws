import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSessionStorage } from "../../util/hooks/sessionStorageHook";

export default function UnProtectedRouteGuard({ component }) {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const sessionStorage = useSessionStorage();

  useEffect(() => {
    checkUser();
  }, [component]);

  const checkUser = () => {
    //Check if token already exist then navigate home
    if (sessionStorage.getUserRole()) {
      navigate("/");
    } else {
      sessionStorage.removeStorageValue();
    }

    setStatus(true);
  };

  if (status) {
    return <React.Fragment>{component}</React.Fragment>;
  } else {
    return <React.Fragment></React.Fragment>;
  }
}
