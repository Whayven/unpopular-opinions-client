import React from "react";

import "./Header.css";

import Login from "./Login/Login";

const Header = (props) => {
  const { user, userFn, passFn, loginFn } = props;
  const userPanel = user.username ? (
    <div>Hello, {user.username}</div>
  ) : (
    <Login
      userFn={userFn}
      passFn={passFn}
      loginFn={loginFn}
    />
  );
  return (
    <header>
      <div className="brand">Unpopular Opinions</div>
      { userPanel }
    </header>
  );
};

export default Header;