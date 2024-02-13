import React, { useState } from 'react';
import {TableData} from '../common/TableData.ts'
import { useAuth } from '../common/AuthContext';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {login,updateToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = 'https://dummyjson.com/auth/login';
    try {
      const data = {
        username: "kminchelle",
        password: "0lelplR",
      };
      const response = await TableData(apiUrl, 'POST', data);
      const { token, firstName } = response;
      const user = firstName;
      login(user);
      updateToken(token);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default Login;
