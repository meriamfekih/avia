import "./App.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardPage from "./components/pages/DashboardPage";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardPage />
    </QueryClientProvider>
  );
}

export default App;
