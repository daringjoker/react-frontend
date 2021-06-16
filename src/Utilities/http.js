import axios from "axios";
import endpoints from "../Constants/endpoints";

let http = axios.create({
  baseURL: endpoints.baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});
export default http;
