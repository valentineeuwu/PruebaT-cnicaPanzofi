import axios, { HttpStatusCode } from "axios";

export default () => {
  const BASE_URL = "http://localhost:8000/api/v1";
  const login = async ({ username, password }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/login`, {
        username,
        password,
      });
      localStorage.setItem("access", data.access_token);
      localStorage.setItem("refresh", data.refresh_token);
      return true;
    } catch (error) {
      if (error.response?.status === HttpStatusCode.Unauthorized) return false;
      throw error;
    }
  };

  const refreshToken = async () => {
    const refresh = localStorage.getItem("refresh");
    const { data } = await axios.post(`${BASE_URL}/token/refresh`, {
      refresh,
    });
    localStorage.setItem("access", data.access);
  };
  return { login, refreshToken };
};
