import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: React.ReactNode;
}

export const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const navigate = useNavigate();
  const isAuth = true; //Change this logic for auth
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);
  return <>{children}</>;
};
