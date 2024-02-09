import axios from "axios";

const API_URL = "http://localhost:8000";

const API_GMAIL = async () => {
  return await axios({
    method: "delete",
    url: `${API_URL}/endpoint`,
    data: {},
  });
};


export default API_GMAIL;