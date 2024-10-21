import axios from "axios";
const baseUrl = "/api/recipes";

//This should be handled with RTK Query
const getAll = async () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response);
};
