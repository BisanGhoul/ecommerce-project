
import React, { createContext, useState, useEffect } from 'react';
import LoginService from '../../services/login.service.js'; 

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => { //children 
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse and set the user
    }
  }, []);

  const login = async (email, password) => {
    const response = await LoginService.login(email, password); 
    if (response.success) {
      setUser(response.user);
      localStorage.setItem('currentUser', JSON.stringify(response.user)); 
    }
    return response; 
  };

  const logout = () => {
    localStorage.removeItem('currentUser'); 
    setUser(null); 
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
