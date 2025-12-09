"use client";

import { createContext, useContext, useState, useEffect, ReactNode, use } from "react";
import { login, userProfile, refreshToken, logout } from "@/service/auth/authapi";
import { User, LoginPayload, UserRole, AuthContextType } from "@/type/type";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const init = async () => {
        try{
            const profile = await userProfile();
            setUser(profile);
        }
        catch (error) {
            await refreshToken();
            const profile = await userProfile();
            setUser(profile);
        }
        finally {
            setLoading(false);
        }
    }
    init();
  }, []);
  const loginUser = async (loginPayload: LoginPayload) => {
    const userData = await login(loginPayload);
    setUser(userData.user);
  };
  const logoutUser = async () => {
    await logout();
    setUser(null);
  }
  return (
    <AuthContext.Provider value={{
        user, loading, loginUser, logoutUser,
    }}>
      {children}
    </AuthContext.Provider>
  )
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};