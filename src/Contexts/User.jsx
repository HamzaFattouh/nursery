// =====================================================
// User Context - سياق المستخدم
// =====================================================

import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { authAPI } from "../services/api";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("userToken"));
  const [loading, setLoading] = useState(true);

  // الحصول على بيانات المستخدم من الخادم
  const getUserData = async () => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error("Error decoding token:", error);
        logout();
      }
    }
    setLoading(false);
  };

  // تسجيل الدخول
  const login = async (email, password) => {
    try {
      const response = await authAPI.login({ email, password });
      const { token: newToken, user: userData } = response.data;

      // حفظ token
      localStorage.setItem("userToken", newToken);
      setToken(newToken);
      setUser(userData);

      return { success: true, user: userData };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.error || "خطأ في تسجيل الدخول",
      };
    }
  };

  // تسجيل مستخدم جديد
  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      const { token: newToken, user: newUser } = response.data;

      localStorage.setItem("userToken", newToken);
      setToken(newToken);
      setUser(newUser);

      return { success: true, user: newUser };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.error || "خطأ في التسجيل",
      };
    }
  };

  // تسجيل الخروج
  const logout = () => {
    localStorage.removeItem("userToken");
    setToken(null);
    setUser(null);
  };

  useEffect(() => {
    getUserData();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;