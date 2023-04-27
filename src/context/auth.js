import { createContext } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  // const userToken = localStorage.getItem('user_token')
  return <AuthContext.Provider>{children}</AuthContext.Provider>
}