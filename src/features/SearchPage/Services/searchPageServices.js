import axios from "axios";
const baseUrl = "/api/recipes";

const getAll = async () => {
  const request = axios.get(baseUrl);
  //Figure out response data
  return request.then((response) => response);
};
