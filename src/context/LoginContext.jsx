import { createContext, useContext, useState } from "react";

const LoginContext = createContext(null);

export const useLogin = () => useContext(LoginContext);

export const LoginContextProvider = ({ children }) => {
  const login = localStorage.getItem('loginDetail')
    const [isLogin , setIsLogin] = useState(login)
  return <LoginContext.Provider value={[isLogin , setIsLogin]}>{children}</LoginContext.Provider>;
};
