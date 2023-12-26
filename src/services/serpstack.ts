import axios from "axios";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERPSTACK_ENDPOINT,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.params = config.params || {};
    config.params.access_key = import.meta.env.VITE_SERPSTACK_ACCESS_KEY;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getAirportMoreInfo = async (
  airportName: string
): Promise<string> => {
  const response = await axiosInstance.get(
    `search?query=${airportName} airport`
  );
  return response.data.knowledge_graph.description;
};
