import { useState } from "react";
import { API_GMAIL as API } from "../services/api";

const useApi = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(fasle);

  const call = async () => {
    setResponse(null);
    setError("");
    setIsLoading(true);

    try {
      let response = await API();
      setResponse(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { call, response, error, isLoading };
};

export default useApi;
