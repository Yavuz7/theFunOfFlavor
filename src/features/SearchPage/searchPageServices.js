import axios from "axios";
const baseUrl = "/api/recipes";

//Move to RTK query?
const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response);
};
