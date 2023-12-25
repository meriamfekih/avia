import React, { FC, PropsWithChildren } from "react";
import FlightsSearchBar from "../features/FlightsSearchBar/FlightsSearchBar";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <FlightsSearchBar />
      {children}
    </div>
  );
};

export default Layout;
