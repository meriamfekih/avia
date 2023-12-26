import GoogleMap, {
  onGoogleApiLoadedProps,
  Map,
} from "google-maps-react-markers";
import { FC, useEffect, useRef } from "react";
import AirportLocation from "../../../assets/icons/airportLocation.png";

interface LatLng {
  lat: number;
  lng: number;
}

const AirportMarker = (props: LatLng) => (
  <div {...props}>
    <img src={AirportLocation} width={40} />
  </div>
);

const AirportsMap: FC<LatLng> = ({ lat, lng }) => {
  const mapRef = useRef<Map>(null);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setCenter({ lat, lng });
    }
  }, [lat, lng]);

  const onGoogleApiLoaded = ({ map }: onGoogleApiLoadedProps) => {
    mapRef.current = map;
  };

  return (
    <div style={{ height: "100%", width: "100%", zIndex: 1 }}>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat, lng }}
        onGoogleApiLoaded={onGoogleApiLoaded}
        apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
      >
        <AirportMarker lat={lat} lng={lng} />
      </GoogleMap>
    </div>
  );
};

export default AirportsMap;
