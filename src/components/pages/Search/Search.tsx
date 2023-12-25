import { useEffect } from "react";
import { FLIGHTS_LIMITS } from "../../../constants";
import { getActiveFlighs } from "../../../services/flightsApi";
import { useQuery } from "@tanstack/react-query";
import { Link, useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { updateSearchParams } from "../../../hepers";
import { Table } from "../../views/Table/Table";

const Search = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["getActiveFlighs"],
    queryFn: () => getActiveFlighs(searchParams),
    enabled: false, // Set to false initially to prevent automatic fetching
  });
  console.log("isLoadingisLoadingisLoading", isFetching);
  useEffect(() => {
    if (searchParams) {
      refetch();
    }
  }, [searchParams, refetch]);

  const handlePageChange = (page: number) => {
    setSearchParams(
      updateSearchParams(searchParams, {
        offset: page === 0 ? "" : (page * FLIGHTS_LIMITS).toString(),
      })
    );
  };

  if (error) {
    <div>{error.message}</div>;
  }

  return (
    <div>
      <Table
        columns={["Flight N°", "AIRLINE", "From", "To", ""]}
        isLoading={isFetching}
      >
        {data?.data.map((flight) => (
          <tr key={flight.flight.number}>
            <td>{flight.flight.number}</td>
            <td>{flight.airline.name}</td>
            <td>
              <div>{flight.departure.airport}</div>
              <div>{flight.departure.scheduled}</div>
            </td>
            <td>
              <div>{flight.arrival.airport}</div>
              <div>{flight.arrival.scheduled}</div>
            </td>
            <td>
              <Link to={`/flights/${flight.flight.number}`}>Show Details</Link>
            </td>
          </tr>
        ))}
      </Table>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        activeClassName="active"
        onPageChange={({ selected }) => handlePageChange(selected)}
        pageCount={data?.pagination.total ?? 0 / FLIGHTS_LIMITS}
        initialPage={
          searchParams.has("offset")
            ? Number(searchParams.get("offset")) / FLIGHTS_LIMITS
            : undefined
        }
        previousLabel="<"
      />
    </div>
  );
};

export default Search;
