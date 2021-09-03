import React, { useState, useEffect } from "react";

import { Auth } from "../../api/auth";
import { LoginForm } from "../../components/form/LoginForm";

export const LoginComponent = (props) => {
  const [login, setLogin] = useState(Auth.read());
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!login.stale) {
      props.onLogin && props.onLogin(login);
    }
  }, [login]);

  const handleLoginSuccess = (user) => {
    const newProps = {
      ...user,
      valid: true,
    };
    login.write(newProps);
    setLogin(newProps);
    setError(false);
  };

  const handleLoginFailure = () => {
    setLogin({});
    setError(true);
  };

  if (login.valid && !login.stale) return null;

  console.log(props.hasLoggedOut);

  return (
    <>
      {(error && <p className="text after login-text-after">Code invalid</p>) ||
        (login.stale && (
          <p className="text after login-text-after">
            You have been logged out due to inactivity. Please log back in.
          </p>
        ))}
      <LoginForm
        onSuccess={handleLoginSuccess}
        onFailure={handleLoginFailure}
      ></LoginForm>
    </>
  );
};

export default LoginComponent;
