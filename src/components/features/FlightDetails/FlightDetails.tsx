import React, { FC } from "react";

interface FlightDetailsProps {
  flight: FlightData;
}
const FlightDetails: FC<FlightDetailsProps> = ({ flight }) => {
  return (
    <div>
      <div>FlightDetails</div>
      <code>{JSON.stringify(flight)}</code>
    </div>
  );
};

export default FlightDetails;
