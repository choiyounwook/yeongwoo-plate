import axios from "axios";

const apiUrl = "/api";

export function fetchStores(params) {
  return axios.get(`${apiUrl}/stores`, {
    params,
  });
}
