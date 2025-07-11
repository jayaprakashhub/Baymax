// utils/auth.js

export const setAuthToken = (token) => {
    localStorage.setItem("token", token);
  };
  
  export const getAuthToken = () => {
    return localStorage.getItem("token");
  };
  
  export const removeAuthToken = () => {
    localStorage.removeItem("token");
  };
  
  export const isLoggedIn = () => {
    return !!getAuthToken();
  };
  