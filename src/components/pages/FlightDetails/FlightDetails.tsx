import { useQuery } from "@tanstack/react-query";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFlightByNumber } from "../../../services/flightsApi";

const FlightDetails: FC = () => {
  const params = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["flightDetails"],
    queryFn: () => getFlightByNumber(params.id as string),
  });
  console.log("datadatadata", data);
  console.log("error", error);
  return <div>Your flight Id is : {params.id} </div>;
};

export default FlightDetails;
