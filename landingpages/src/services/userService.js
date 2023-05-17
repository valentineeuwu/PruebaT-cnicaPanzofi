import axios, { HttpStatusCode } from "axios";
import loginService from "./loginService";

export default () => {
  const BASE_URL = "http://localhost:8000/api/v1";
  const getUser = async () => {
    try {
      const access = localStorage.getItem("access");
      const { data } = await axios.get(`${BASE_URL}/user`, {
        //hace la peticion del token
        headers: { Authorization: `Bearer ${access}` }, //datos extra para la petición
      });
      return data;
    } catch (error) {
      if (error.response?.status === HttpStatusCode.Unauthorized) {
        try {
          await loginService().refreshToken();
          await getUser();
        } catch (error) {
          console.error(error);
          return null;
        }
      }
    }
  };
  const handleButtonClick = async (button) => {
    try {
      const access = localStorage.getItem("access");
      console.log(access);
      const { data } = await axios.put(
        `${BASE_URL}/session/click/${button}`,
        {},
        {
          headers: { Authorization: `Bearer ${access}` },
        }
      );
      return data;
    } catch (error) {
      if (error.response?.status === HttpStatusCode.Unauthorized) {
        try {
          await loginService().refreshToken();
          await handleButtonClick();
        } catch (error) {
          console.error(error);
          return null;
        }
      }
    }
  };
  return { getUser, handleButtonClick };
};
