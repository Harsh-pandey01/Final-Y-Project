import { createContext, useContext, useState } from "react";

const LoginContext = createContext(null);

export const useLogin = () => useContext(LoginContext);

export const LoginContextProvider = ({ children }) => {
    const [isLogin , setIsLogin] = useState(null)
  return <LoginContext.Provider value={[isLogin , setIsLogin]}>{children}</LoginContext.Provider>;
};
