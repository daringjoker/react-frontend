import constants from "../Constants";
import http from "../Utilites/http";
export const fetchSelf = async () => {
  let url = constants.endpoints.user.self;
  let response = await http.get(url);
  return response.data;
};
