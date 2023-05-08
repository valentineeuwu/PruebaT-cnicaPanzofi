import axios from "axios";

export default () => {
  const BASE_URL = "http://localhost:8000/api/v1";
  const getUser = async ({ access, refresh }) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/user`, {
        headers: { Authorization: `Bearer ${access}` },
      });
      return data;
    } catch (error) {
      if (error.response.ib) return error;
    }
  };
  return { login };
};
