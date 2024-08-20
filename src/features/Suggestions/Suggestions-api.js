import axios from "axios";
const baseUrl = "/api/suggestions";

const getNextSuggestions = async (pageId, step, lastId) => {
  try {
    const params = lastId ? { after: lastId, limit: 3 } : { limit: 3 };
    const response = await axios.get(baseUrl + "/" + pageId + "/" + step, {
      params,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getNextSuggestions,
};
