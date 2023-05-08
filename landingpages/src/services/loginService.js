import axios, { HttpStatusCode } from "axios";

export default () => {
  const BASE_URL = "http://localhost:8000/api/v1";
  const login = async ({ username, password }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/login`, {
        username,
        password,
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  const refreshToken = async ({ refresh }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/token/refresh`, {
        refresh,
      });
      return data;
    } catch (error) {
      return error;
    }
  };
  return { login, refreshToken };
};
