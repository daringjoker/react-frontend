import endpoints from "../Constants/endpoints";
import http from "../Utilites/http";

export const login = async (data) => {
  let url = endpoints.auth.login;
  let res = await http.post(url, data, { crossdomain: true });
  return res.data;
};

export default login;
