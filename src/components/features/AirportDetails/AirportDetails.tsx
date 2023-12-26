import { FC } from "react";
import AirportFlights from "../AirportFlights/AirportFlights";
import AirportsMap from "../../views/AirportsMap/AirportsMap";
import styles from "./AirportDetails.module.scss";
import AirportMoreInfo from "../AirportMoreInfo/AirportMoreInfo";

interface AirportDetailsProps {
  airport: AirportData;
}
const AirportDetails: FC<AirportDetailsProps> = ({ airport }) => {
  return (
    <div>
      <div className={styles.flexContainer}>
        <div className={styles.airportdetails}>
          <div className={styles.airportInfos}>
            <div className={styles.detail}>
              <span className={styles.title}>airport name :</span>
              <span>{airport.airport_name}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.title}>IATA code :</span>
              <span>{airport.iata_code}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.title}>ICAO code :</span>
              <span>{airport.icao_code}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.title}>country :</span>
              <span>{airport.country_name}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.title}>timezone :</span>
              <span>{airport.timezone}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.title}>latitude :</span>
              <span>{airport.latitude}</span>
            </div>
            <div className={styles.detail}>
              <span className={styles.title}>longitude :</span>
              <span>{airport.longitude}</span>
            </div>
          </div>
          <AirportMoreInfo airportName={airport.airport_name} />
        </div>
        <div className={styles.map}>
          <AirportsMap
            lat={Number(airport.latitude)}
            lng={Number(airport.longitude)}
          />
        </div>
      </div>
      <AirportFlights airportCode={airport.icao_code} />
    </div>
  );
};

export default AirportDetails;
