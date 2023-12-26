import { useQuery } from "@tanstack/react-query";
import { FC } from "react";
import { getAirportMoreInfo } from "../../../services/serpstack";
import styles from "./AirportMoreInfo.module.scss";
interface AirportMoreInfoProps {
  airportName: string;
}
const AirportMoreInfo: FC<AirportMoreInfoProps> = ({ airportName }) => {
  const { data, isFetching } = useQuery({
    queryKey: [`getAirportMoreInfo-${airportName}`],
    queryFn: () => getAirportMoreInfo(airportName),
  });
  return (
    <div className={styles.moreInfoContainer}>
      <h2>More about {airportName}</h2>
      <p>
        {isFetching ? <span>Loading...</span> : data ?? "No information found"}
      </p>
    </div>
  );
};

export default AirportMoreInfo;
