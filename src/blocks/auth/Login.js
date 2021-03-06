import React, { useState, useEffect } from "react";

import { Auth } from "../../api/auth";
import { LoginForm } from "../../components/form/LoginForm";

export const LoginComponent = (props) => {
  const [isLoggedOut, setIsLoggedOut] = useState(!!localStorage.getItem('BB_LOGOUT'))
  const [login, setLogin] = useState(Auth.read());
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!login.stale) {
      props.onLogin && props.onLogin(login);
    }
  }, [login, props]);

  const handleLoginSuccess = (user) => {
    const newProps = {
      ...user,
      valid: true,
    };
    login.write(newProps);
    setLogin(newProps);
    setError(false);
    setIsLoggedOut(false);
  };

  const handleLoginFailure = () => {
    setError(true);
  };

  if (login.valid && !login.stale) return null;

  return (
    <>
      {(error && <p className="text after login-text-after">The code you entered is invalid. Please try again.</p>) ||
        (login.stale && (
          <p className="text after login-text-after">
            You have been logged out due to inactivity. Please log back in.
          </p>
        )) ||
        (isLoggedOut && (
          <p className="text after login-text-after">
            You have successfully been logged out.
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
