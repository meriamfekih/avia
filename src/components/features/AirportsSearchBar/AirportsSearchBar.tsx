import { FC } from "react";
import PositionIcon from "../../../assets/icons/Position.svg";
import AirplaneImage from "../../../assets/images/airplane.png";
import useAirportsAutoComplete from "../../../hooks/useAirportsAutoComplete";
import SearchInput from "../../views/SearchInput/SearchInput";
import styles from "./AirportsSearchBar.module.scss";

interface AirportsSearchBarProps {
  onSelectAirport: (selectedAirport: AirportData) => void;
}
const AirportsSearchBar: FC<AirportsSearchBarProps> = ({ onSelectAirport }) => {
  const {
    search,
    suggestions: airports,
    setSearch,
  } = useAirportsAutoComplete();

  const handleSelectAirport = (selectedAirport: AirportData) => {
    setSearch("");
    onSelectAirport(selectedAirport);
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.airplaneImg}
        src={AirplaneImage}
        alt="airplane image"
      />
      <h1>Start Your Airport Search</h1>
      <div className={styles.searchContainer}>
        <SearchInput value={search} handleSearchChange={setSearch} />
        <div className={styles.dropdown}>
          {airports.length > 0 && (
            <div>
              <div className={styles.sectionTitle}>Airports</div>
              <div className={styles.itemContainer}>
                {airports.map((airport) => (
                  <div
                    key={airport.icao_code}
                    className={styles.item}
                    onClick={() => handleSelectAirport(airport)}
                  >
                    <div className={styles.itemInfo}>
                      <div>
                        <img src={PositionIcon} width={30} />
                      </div>
                      <div className={styles.itemTitle}>
                        <div>{airport.airport_name}</div>
                        <span className={styles.itemBadge}>
                          {airport.country_name}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AirportsSearchBar;
