import http from "../Utilities/http";
import endpoints from "../Constants/endpoints";

export const login = async (data) => {
  let url = endpoints.auth.login;
  let res = await http.post(url, data, { crossdomain: true });
  return res.data;
};

export const refresh = async (data) => {
  let url = endpoints.auth.refresh;
  let res = await http.post(url, data, { crossdomain: true });
  return res.data;
};

export const logout = async (data) => {};
export default login;
