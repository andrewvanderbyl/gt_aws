import * as React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSessionStorage } from "../../util/hooks/sessionStorageHook";

export default function ProtectedRouteGuard({ component }) {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();
  const sessionStorage = useSessionStorage();

  useEffect(() => {
    checkUser();
  }, [component]);

  const checkUser = () => {
    if (!sessionStorage.getUserRole()) {
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
