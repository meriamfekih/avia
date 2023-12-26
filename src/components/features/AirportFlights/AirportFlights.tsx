import { useQuery } from "@tanstack/react-query";
import { FC, useState } from "react";
import ReactPaginate from "react-paginate";
import { FLIGHTS_LIMITS } from "../../../constants";
import { getAirLineLogoUrl } from "../../../hepers";
import { getFlighsFromAirport } from "../../../services/flightsApi";
import { Table } from "../../views/Table/Table";
import styles from "./AirportFlights.module.scss";

interface AirportFlightsProps {
  airportCode: string;
}

const AirportFlights: FC<AirportFlightsProps> = ({ airportCode }) => {
  const [offset, setOffset] = useState(0);
  const { data, isFetching, error } = useQuery({
    queryKey: [`getFlighsFromAirport-${airportCode}-${offset}`],
    queryFn: () => getFlighsFromAirport(airportCode, offset),
  });

  if (error) {
    <div>{error.message}</div>;
  }

  return (
    <div className={styles.flightsTable}>
      <Table
        columns={["Flight N°", "AIRLINE", "From", "To", "Status"]}
        isLoading={isFetching}
      >
        {data &&
          (data.data.length > 0 ? (
            data.data.map((flight) => (
              <tr key={flight.flight.number}>
                <td>{flight.flight.number}</td>
                <td>
                  <img
                    src={getAirLineLogoUrl(flight.airline.iata)}
                    width={100}
                  />
                  <div>{flight.airline.name}</div>
                </td>
                <td>
                  <div>{flight.departure.airport}</div>
                  <div>{flight.departure.scheduled}</div>
                </td>
                <td>
                  <div>{flight.arrival.airport}</div>
                  <div>{flight.arrival.scheduled}</div>
                </td>
                <td>
                  <div>{flight.flight_status}</div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className={styles.emptyTable} colSpan={5}>
                No flights found from this airport
              </td>
            </tr>
          ))}
      </Table>
      {data && data.data.length > 0 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          activeClassName="active"
          onPageChange={({ selected }) => setOffset(FLIGHTS_LIMITS * selected)}
          pageCount={(data?.pagination.total ?? 0) / FLIGHTS_LIMITS}
          initialPage={offset / FLIGHTS_LIMITS}
          previousLabel="<"
        />
      )}
    </div>
  );
};

export default AirportFlights;
