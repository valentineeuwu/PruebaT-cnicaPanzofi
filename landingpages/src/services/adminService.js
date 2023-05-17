import axios, { HttpStatusCode } from "axios";
import loginService from "./loginService";

export default () => {
  const BASE_URL = "http://localhost:8000/api/v1";
  const getSession = async () => {
    try {
      const access = localStorage.getItem("access");
      const { data } = await axios.get(`${BASE_URL}/session/info`, {
        headers: { Authorization: `Bearer ${access}` },
      });
      return data;
    } catch (error) {
      if (error.response?.status === HttpStatusCode.Unauthorized) {
        try {
          await loginService().refreshToken();
          await getSession();
        } catch (error) {
          console.error(error);
          return null;
        }
      }
    }
  };
  return { getSession };
};
