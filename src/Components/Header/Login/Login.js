import React from "react";

import './Login.css'

const Login = (props) => {
  const { userFn, passFn } = props;
  return (
    <div className="user-panel">
      <input name="username" onChange={(e) => userFn(e.target.value)} placeholder="Username" />
      <input name="password" type="password" onChange={(e) => passFn(e.target.value)} placeholder="Password" />
      <button className="login-button" onClick={props.loginFn}>Login</button>
    </div>
  );
};

export default Login;
