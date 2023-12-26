import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { MAX_AUTO_COMPLETE_RESULT } from "../constants";
import { getAirports } from "../services/flightsApi";

const useAirportsAutoComplete = () => {
  const [search, setSearch] = useState("");
  const { data } = useQuery({
    queryKey: ["airports"],
    queryFn: getAirports,
    retry: false,
  });

  const suggestions =
    !search || !data
      ? []
      : data
          .filter((airport) =>
            airport.airport_name.toLowerCase().startsWith(search.toLowerCase())
          )
          .slice(0, MAX_AUTO_COMPLETE_RESULT);

  return {
    suggestions,
    setSearch,
    search,
  };
};

export default useAirportsAutoComplete;
