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

  const updateToken = (newToken) => {
    setToken(newToken);
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
    <AuthContext.Provider value={{ token, user, login, logout, updateToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
