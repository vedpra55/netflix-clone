import { useContext, createContext, useState, useEffect } from "react";

import { getEmailAddress, handleLogOut } from "../lib/magic-client";

import { useRouter } from "next/router";

const AuthContext = createContext();

export const AuthStateContext = ({ children }) => {
  const [email, setEmail] = useState("user");

  const router = useRouter();

  async function getLogin() {
    const resemail = await getEmailAddress();
    setEmail(resemail);
  }

  async function handleLogOutBtn() {
    await handleLogOut();
    router.push("/login");
  }

  useEffect(() => {
    getLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ email: email, handleLogOutBtn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
