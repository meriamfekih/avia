import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/pages/Home";
import Search from "./components/pages/Search/Search";
import Layout from "./components/templates/Layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const FlightDetails = React.lazy(
  () => import("./components/pages/FlightDetails/FlightDetails")
);
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/flights/:id" element={<FlightDetails />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
