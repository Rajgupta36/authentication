import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

// named export
export const AuthContextProvider = (props) => {
  // responsible for managing auth related state
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token; // !! converts this truthy or falsy value into boolean true or false, if token is a string that is not empty than it will return true

  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };

  const contexValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contexValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

// default export
export default AuthContext;
