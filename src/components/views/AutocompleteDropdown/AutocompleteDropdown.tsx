import styles from "./AutocompleteDropdown.module.scss";
import ArrivalFlightIcon from "../../../assets/icons/ArrivalFlight.svg?react";
import DepartureFlightIcon from "../../../assets/icons/DepartureFlight.svg?react";
import PositionIcon from "../../../assets/icons/Position.svg?react";
import { getAirLineLogoUrl } from "../../../hepers";

interface DropdownPropos {
  airports: AirportInfo[];
  airlines: AirlineInfo[];
  handleSelectFilter: (paramps: any) => void;
}
const Dropdown = ({
  airports,
  airlines,
  handleSelectFilter,
}: DropdownPropos) => {
  return (
    <div className={styles.dropdown}>
      {airports.length > 0 && (
        <div>
          <div className={styles.sectionTitle}>Airports</div>
          <div className={styles.itemContainer}>
            {airports.map((airport) => (
              <div key={airport.icao_code} className={styles.item}>
                <div className={styles.itemInfo}>
                  <div>
                    <PositionIcon width={30} />
                  </div>
                  <div className={styles.itemTitle}>
                    <div>{airport.airport_name}</div>
                    <span className={styles.itemBadge}>
                      {airport.country_name}
                    </span>
                  </div>
                </div>
                <div className={styles.itemActions}>
                  <button
                    onClick={() =>
                      handleSelectFilter({ dep_icao: airport.icao_code })
                    }
                  >
                    <DepartureFlightIcon width={50} />
                    <span>Departure</span>
                  </button>
                  <button
                    onClick={() =>
                      handleSelectFilter({ arr_icao: airport.icao_code })
                    }
                  >
                    <ArrivalFlightIcon width={50} />
                    <span>Arrival</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {airlines.length > 0 && (
        <div>
          <h5 className={styles.sectionTitle}>Airlines</h5>
          <div className={styles.itemContainer}>
            {airlines.map((airline) => (
              <div key={airline.icao_code} className={styles.item}>
                <div className={styles.itemInfo}>
                  <img src={getAirLineLogoUrl(airline.iata_code)} />
                  <div className={styles.itemTitle}>
                    <div>{airline.airline_name}</div>
                    <span className={styles.itemBadge}>
                      {airline.iata_code}
                    </span>
                  </div>
                </div>
                <div className={styles.itemActions}>
                  <button
                    onClick={() =>
                      handleSelectFilter({ airline_iata: airline.iata_code })
                    }
                  >
                    <span>Find flights</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
