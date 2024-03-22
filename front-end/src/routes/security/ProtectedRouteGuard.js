import React, { useEffect, useState } from "react";
import { useAuth } from "../../util/context/AuthUserContext";
import { useNavigate } from "react-router";

export default function ProtectedRouteGuard({ component }) {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const authUserContext = useAuth();

  useEffect(() => {
    checkUser();
  }, [component]);

  const checkUser = () => {
    if (!authUserContext.localStorageValue) {
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
}
