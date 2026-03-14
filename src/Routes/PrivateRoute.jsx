import React, { Children, useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { account } from "../appwrite";
import Login from "../utils/Login";

const PrivateRoute = ({ Firstpage }) => {
  const navigate = useNavigate();
  const [authentication, setauthentication] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log("here");
    account
      .get()
      .then((res) => {
        console.log("Here", res);
        setauthentication(true);
      })
      .catch((err) => {
        console.log("Errr>>>>", err);
        setauthentication(false);
        account.deleteSession("current");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <>loading.....</>
  ) : authentication ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" />
  );
};

export default PrivateRoute;
