interface Pagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}

interface DepArr {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string;
  gate: string;
  delay: number;
  scheduled: string;
  estimated: string;
  actual: string;
  estimated_runway: string;
  actual_runway: string;
}

interface Airline {
  name: string;
  iata: string;
  icao: string;
}

interface Flight {
  number: string;
  iata: string;
  icao: string;
  codeshared: any; // You can replace 'any' with the appropriate type if codeshared has a specific structure
}

interface Aircraft {
  registration: string;
  iata: string;
  icao: string;
  icao24: string;
}

interface Live {
  updated: string;
  latitude: number;
  longitude: number;
  altitude: number;
  direction: number;
  speed_horizontal: number;
  speed_vertical: number;
  is_ground: boolean;
}

interface FlightData {
  flight_date: string;
  flight_status: string;
  departure: DepArr;
  arrival: DepArr;
  airline: Airline;
  flight: Flight;
  aircraft: Aircraft;
  live: Live;
}

interface ApiResponse<T> {
  pagination: Pagination;
  data: Array<T>;
}

interface AirlineInfo {
  airline_name: string;
  iata_code: string;
  icao_code: string;
}

interface AirportInfo {
  airport_name: string;
  iata_code: string;
  icao_code: string;
  country_name: string;
}
