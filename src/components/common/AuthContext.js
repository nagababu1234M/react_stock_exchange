// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (newToken, newUser) => {
    setToken(newToken);
    setUser(newUser);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    // Perform token verification logic here (e.g., check if the token is valid)
    // If the token is not valid, call logout() to clear the token and user
    // Note: This is a simplified example, and you may need to enhance the token verification logic
    if (token && user) {
      // Assume the token is valid
      setLoading(false);
    } else {
      logout();
      setLoading(false);
    }
  }, [token, user]);

  return (
    <AuthContext.Provider value={{ token, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
