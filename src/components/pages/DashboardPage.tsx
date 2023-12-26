import { useState } from "react";
import AirportDetails from "../features/AirportDetails/AirportDetails";
import AirportsSearchBar from "../features/AirportsSearchBar/AirportsSearchBar";
import styles from "./DashboardPage.module.scss";

const DashboardPage = () => {
  const [selectedAirport, setSelectedAirport] = useState<AirportData>();
  return (
    <div className={styles.pageContainer}>
      <AirportsSearchBar onSelectAirport={setSelectedAirport} />
      {selectedAirport && <AirportDetails airport={selectedAirport} />}
    </div>
  );
};

export default DashboardPage;
