import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../utils/authContext/authContext";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

export const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const navigate = useNavigate();
  const {
    authState: { isAuth },
  } = useAuth();

  useEffect(() => {
    if (!isAuth) {
      return navigate("/login");
    }
  }, [isAuth]);
  return <>{children}</>;
};
