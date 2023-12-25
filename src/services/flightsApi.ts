import axios from "axios";
import { FLIGHTS_LIMITS } from "../constants";
import { updateSearchParams } from "../hepers";
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

export const getActiveFlighs = async (
  queryParam: URLSearchParams
): Promise<ApiResponse<FlightData>> => {
  const searchParams = updateSearchParams(queryParam, {
    limit: FLIGHTS_LIMITS.toString(),
    flight_status: "active",
  });
  const response = await axiosInstance.get<ApiResponse<FlightData>>(
    `flights?${searchParams.toString()}`
  );
  return response.data;
};

export const getFlightByNumber = async (
  flightNumber: string
): Promise<FlightData> => {
  const response = await axiosInstance.get<ApiResponse<FlightData>>(
    `flights?limit=1&flight_number=${flightNumber}`
  );
  if (response.data.data.length === 0) {
    throw new Error("Flight data not found");
  }
  return response.data.data[0];
};

export const getAirlines = async (): Promise<AirlineInfo[]> => {
  const response = await axiosInstance.get<ApiResponse<AirlineInfo>>(
    "airlines"
  );
  return response.data.data;
};

export const getAirports = async (): Promise<AirportInfo[]> => {
  const response = await axiosInstance.get<ApiResponse<AirportInfo>>(
    "airports"
  );
  return response.data.data;
};
