import axios from "axios";
import { FLIGHTS_LIMITS } from "../constants";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_AVIATIONSTACK_API_ENDPOINT,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Add the access token to the request headers or URL
    config.params = config.params || {};
    config.params.access_key = import.meta.env.VITE_AVIATIONSTACK_ACCESS_KEY;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getFlighsFromAirport = async (
  airportCode: string,
  offset = 0
): Promise<ApiResponse<FlightData>> => {
  const searchParams = new URLSearchParams({
    dep_icao: airportCode,
    offset: offset.toString(),
    limit: FLIGHTS_LIMITS.toString(),
  });
  const response = await axiosInstance.get<ApiResponse<FlightData>>(
    `flights?${searchParams.toString()}`
  );
  return response.data;
};

export const getAirports = async (): Promise<AirportData[]> => {
  const response = await axiosInstance.get<ApiResponse<AirportData>>(
    "airports"
  );
  return response.data.data;
};
