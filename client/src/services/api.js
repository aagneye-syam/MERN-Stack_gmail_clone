import axios from "axios";

const API_URL = "http://localhost:8000";

const API_GMAIL = async (urlObject) => {
  return await axios({
    method: urlObject.method,
    url: `${API_URL}/${urlObject.endpoint}`,
    data: {},
  });
};


export default API_GMAIL;