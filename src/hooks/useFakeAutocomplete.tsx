import { useEffect, useState } from "react";
import { getAirlines, getAirports } from "../services/flightsApi";
import { MAX_AUTO_COMPLETE_RESULT } from "../constants";

const useFakeAutoComplete = () => {
  const [airlines, setAirlines] = useState<AirlineInfo[]>([]);
  const [airports, setAirports] = useState<AirportInfo[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAirlines().then(setAirlines);
    getAirports().then(setAirports);
  }, []);

  const suggestions = !search
    ? { airlines: [], cities: [], airports: [] }
    : {
        airlines: airlines
          .filter((airline) =>
            airline.airline_name.toLowerCase().startsWith(search.toLowerCase())
          )
          .slice(0, MAX_AUTO_COMPLETE_RESULT),
        airports: airports
          .filter((airport) =>
            airport.airport_name.toLowerCase().startsWith(search.toLowerCase())
          )
          .slice(0, MAX_AUTO_COMPLETE_RESULT),
      };

  return {
    suggestions,
    setSearch,
    search,
  };
};

export default useFakeAutoComplete;
